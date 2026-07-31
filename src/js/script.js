(function() {
    'use strict';
    
    function setupModal(modalId, openBtnId, closeBtnId) {
        const modal = document.querySelector(modalId);
        const openBtn = document.querySelector(openBtnId);
        const closeBtn = document.querySelector(closeBtnId);
        let scrollPosition = 0;
        
        if (!modal || !openBtn || !closeBtn) return;
        
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = "100%";
        });
        
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, scrollPosition);
        });
        
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, scrollPosition);
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {

            setupModal("#modal-1", "#openModal", "#close");
            setupModal("#modal-2", "#openModal2", "#close2");
            setupModal("#modal-3", "#openModal3", "#close3");
            setupModal("#modal-4", "#openModal4", "#close4");
            setupModal("#modal-5", "#openModal5", "#close5");
            setupModal("#modal-6", "#openModal6", "#close6");
            setupModal("#modal-7", "#openModal7", "#close7");
            setupModal("#modal-8", "#openModal8", "#close8");
            setupModal("#modal-9", "#openModal9", "#close9");
            setupModal("#modal-10", "#openModal10", "#close10");
            setupModal("#modal-11", "#openModal11", "#close11");
            setupModal("#modal-12", "#openModal12", "#close12");
            setupModal("#modal-13", "#openModal13", "#close13");
            setupModal("#modal-14", "#openModal14", "#close14");
            setupModal("#modal-15", "#openModal15", "#close15");
            setupModal("#modal-16", "#openModal16", "#close16");
            setupModal("#modal-17", "#openModal17", "#close17");
            setupModal("#modal-18", "#openModal18", "#close18");
            setupModal("#modal-19", "#openModal19", "#close19");
        });
    } else {
        // DOM уже загружен

        setupModal("#modal-1", "#openModal", "#close");
        setupModal("#modal-2", "#openModal2", "#close2");
        setupModal("#modal-3", "#openModal3", "#close3");
        setupModal("#modal-4", "#openModal4", "#close4");
        setupModal("#modal-5", "#openModal5", "#close5");
        setupModal("#modal-6", "#openModal6", "#close6");
        setupModal("#modal-7", "#openModal7", "#close7");
        setupModal("#modal-8", "#openModal8", "#close8");
        setupModal("#modal-9", "#openModal9", "#close9");
        setupModal("#modal-10", "#openModal10", "#close10");
        setupModal("#modal-11", "#openModal11", "#close11");
        setupModal("#modal-12", "#openModal12", "#close12");
        setupModal("#modal-13", "#openModal13", "#close13");
        setupModal("#modal-14", "#openModal14", "#close14");
        setupModal("#modal-15", "#openModal15", "#close15");
        setupModal("#modal-16", "#openModal16", "#close16");
        setupModal("#modal-17", "#openModal17", "#close17");
        setupModal("#modal-18", "#openModal18", "#close18");
        setupModal("#modal-19", "#openModal19", "#close19");
    }
})();


