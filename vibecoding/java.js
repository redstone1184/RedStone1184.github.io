 const section = document.getElementById('gallerySection');
    const slides = document.querySelectorAll('.slide');
    const bgLayer = document.getElementById('bgLayer');
    const storyText = document.getElementById('storyText');
    
    function updateSlides() {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max((-rect.top) / (section.offsetHeight - window.innerHeight), 0), 1);
      const index = Math.min(slides.length - 1, Math.floor(progress * slides.length));

      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i < index) slide.classList.add('prev');
        else if (i === index) slide.classList.add('active');
      });

      bgLayer.style.backgroundImage = `url(${slides[index].dataset.bg})`;
      storyText.style.opacity = 0;
      storyText.style.transform = 'translateY(20px)';

      setTimeout(() => {
        storyText.textContent = slides[index].dataset.text;
        storyText.style.opacity = 1;
        storyText.style.transform = 'translateY(0)';
      }, 200);
    }

    window.addEventListener('scroll', updateSlides);
    window.addEventListener('load', updateSlides);