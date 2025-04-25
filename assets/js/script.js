

const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const track = document.querySelector('.carousel-track');
    const btnNext = document.querySelector('.carousel-btn.next');
    const btnPrev = document.querySelector('.carousel-btn.prev');
    let index = 0;
  
    btnNext.addEventListener('click', () => {
      const slideWidth = track.querySelector('img').clientWidth;
      if (index < track.children.length - 1) index++;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    });
  
    btnPrev.addEventListener('click', () => {
      const slideWidth = track.querySelector('img').clientWidth;
      if (index > 0) index--;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    });
  
    window.addEventListener('resize', () => {
      const slideWidth = track.querySelector('img').clientWidth;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    });
