const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const sass              = require('gulp-sass')(require('sass'));
const rename            = require("gulp-rename");
const autoprefixer      = require("gulp-rename");
const cleanCSS          = require('gulp-clean-css');
const htmlmin           = require('gulp-htmlmin');
const imagemin          = require('gulp-imagemin');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)", { encoding: false })
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", gulp.parallel("html"));
});

gulp.task('html', function() {
    return gulp.src("src/*.html", { encoding: false })
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js", { encoding: false })
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src("src/img/**/*", { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});


gulp.task('icons', function() {
    return gulp.src("src/icons/**/*", { encoding: false })
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*", { encoding: false })
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'images', 'icons', 'fonts'));
