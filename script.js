document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Hero Text Animation
    const heroElements = document.querySelectorAll('.anim-text');
    heroElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('reveal');
        }, 300 * i);
    });

    // 2. Intersection Observer for Project Cards
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Optional: Stop observing after it appears
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        projectObserver.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('poster-project');
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-btn');

    if (trigger && modal) {
        modal.style.display = 'none';

        // Listen for user click on Movie Poster Card
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page from refreshing/reloading
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        });

        // Close when clicking 'X'
        closeBtn.addEventListener('click', closeModal);

        // Close when clicking gray area outside image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Video Popup Logic ---
    const videoTrigger = document.getElementById('video-project');
    const videoModal = document.getElementById('videoModal');
    const closeVideoBtn = document.querySelector('.close-video-btn');
    const youtubePlayer = document.getElementById('youtubePlayer');
    
    // Save the original source URL so we can clear/reset it to stop audio playback on close
    const videoSrc = youtubePlayer ? youtubePlayer.src : '';

    if (videoTrigger && videoModal) {
        videoModal.style.display = 'none';

        // Open Video Modal
        videoTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            // Re-assign src to ensure video loads fresh when opened
            youtubePlayer.src = videoSrc; 
            videoModal.style.display = 'flex';
            setTimeout(() => {
                videoModal.classList.add('active');
            }, 10);
        });

        // Close via 'X' button
        closeVideoBtn.addEventListener('click', closeVideo);

        // Close via clicking backdrop overlay
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideo();
            }
        });

        // Close via Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeVideo();
            }
        });
    }

    function closeVideo() {
        videoModal.classList.remove('active');
        // Instantly kill video playback audio stream by wiping the source link
        if(youtubePlayer) youtubePlayer.src = ''; 
        
        setTimeout(() => {
            videoModal.style.display = 'none';
        }, 300);
    }
});
