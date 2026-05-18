document.addEventListener('DOMContentLoaded', () => {
    // Select elements safely
    const imgTrigger = document.getElementById('poster-project');
    const imgModal = document.getElementById('imageModal');
    const vidTrigger = document.getElementById('video-project');
    const vidModal = document.getElementById('videoModal');
    const ytPlayer = document.getElementById('youtubePlayer');
    const ytSrc = ytPlayer ? ytPlayer.src : '';

    // Unified Open Modal Logic
    const openModal = (modal, setupCallback) => {
        if (!modal) return;
        if (setupCallback) setupCallback();
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    };

    // Unified Close Modal Logic
    const closeModal = (modal, teardownCallback) => {
        if (!modal || !modal.classList.contains('active')) return;
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            if (teardownCallback) teardownCallback();
        }, 300);
    };

    // Project 1: Image Modal Event Handlers
    if (imgTrigger && imgModal) {
        imgTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(imgModal);
        });
    }

    // Project 3: Video Modal Event Handlers
    if (vidTrigger && vidModal) {
        vidTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(vidModal, () => { if (ytPlayer) ytPlayer.src = ytSrc; });
        });
    }

    // Dynamic backdrop and close button listeners for all elements
    document.querySelectorAll('.popup-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.hasAttribute('data-close')) {
                closeModal(imgModal);
                closeModal(vidModal, () => { if (ytPlayer) ytPlayer.src = ''; });
            }
        });
    });

    // Universal Escape Key event handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(imgModal);
            closeModal(vidModal, () => { if (ytPlayer) ytPlayer.src = ''; });
        }
    });
});
