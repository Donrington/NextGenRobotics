// Create the custom cursor element and append it to the body
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Update the custom cursor's position smoothly with the mouse
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Add event listeners to interactive elements (links, buttons, images, etc.)
const interactiveElements = document.querySelectorAll('a, button, img');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
  
    hamburger.addEventListener("click", function() {
      // Toggle the "active" class on the nav menu
      navMenu.classList.toggle("active");
      // Also toggle the "open" class on the hamburger icon for its animation
      hamburger.classList.toggle("open");
    });
  });

/* Particles for the About section */
particlesJS('particles-js-about', {
  "particles": {
    "number": { 
      "value": 80, 
      "density": { "enable": true, "value_area": 800 } 
    },
    "color": { "value": "#000" }, /* green color you mentioned */
    "shape": { 
      "type": "circle", 
      "stroke": { "width": 0, "color": "#ffffff" } 
    },
    "opacity": { "value": 0.3 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 80, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});




document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  
  let currentIndex = 0;
  let slideCount = slides.length;
  let interval = null;
  
  // Show a given slide by index, hide others
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  // Move to next/prev
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
  }
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    showSlide(currentIndex);
  }
  
  // Auto-play every 3 seconds
  function startAutoPlay() {
    interval = setInterval(nextSlide, 5000);
  }
  function stopAutoPlay() {
    clearInterval(interval);
  }
  
  // Event listeners
  nextButton.addEventListener('click', () => {
    stopAutoPlay(); // optional: reset timer on manual click
    nextSlide();
    startAutoPlay();
  });
  prevButton.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });
  
  // Pause on hover (optional)
  slides.forEach((slide) => {
    slide.addEventListener('mouseenter', stopAutoPlay);
    slide.addEventListener('mouseleave', startAutoPlay);
  });
  
  // Init
  showSlide(currentIndex);
  startAutoPlay();
});





  // Initialize particles for the work section background
  particlesJS("particles-js-work", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });






 
  particlesJS("particles-js-showcase", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });


  document.querySelectorAll('.overlay-video').forEach(video => {
    video.addEventListener('loadeddata', () => {
      video.classList.add('loaded');
    });
  });






document.addEventListener('DOMContentLoaded', function() {
  
  /* --- FAQ Toggle Logic --- */
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    
    questionBtn.addEventListener('click', () => {
      // Close any open item if you want only one open at a time
      // Otherwise, remove the following block for multiple open items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active');
    });
  });
  
  /* --- Particles.js Initialization --- */
  particlesJS('particles-faq', {
    "particles": {
      "number": {
        "value": 70,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#333" }, /* brand green or any color */
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#333" }
      },
      "opacity": {
        "value": 0.3, 
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#333",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
  
});



document.getElementById('year').textContent = new Date().getFullYear();




document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.s-header'); // or your header class
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
