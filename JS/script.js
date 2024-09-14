const hamburgerMenu = document.getElementById('hamburger-menu');
const closeIcon = document.getElementById('close-icon');
const menuLinks = document.getElementById('menu-links');
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
const backToTopImg = document.querySelector('.BackToTopCSS');
const htmlElement = document.querySelector('html');

// Open the menu and hide vertical overflow when clicking the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    menuLinks.classList.add('active');
    htmlElement.classList.add('menu-open');
});

// Close the menu and restore vertical overflow when clicking the close icon
closeIcon.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    htmlElement.classList.remove('menu-open');
});

// Smooth scroll when clicking on menu links
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY;
            menuLinks.classList.remove('active');
            htmlElement.classList.remove('menu-open');
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to the top of the page when clicking the "Back to Top" arrow
$(document).ready(function() {
  // Show/hide the "Back to Top" arrow based on scroll position
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn();
      } else {
          $('.back-to-top').fadeOut();
      }
  });

  // Smooth scrolling to top when arrow is clicked
  $('#backToTop').click(function() {
      $('html, body').animate({scrollTop: 0}, 100);
      return false;
  });
});

// Close the menu and restore vertical overflow when clicking outside of it
document.addEventListener('click', (event) => {
    if (!menuLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menuLinks.classList.remove('active');
        htmlElement.classList.remove('menu-open');
    }
});

// Ensure the page starts at the top when it loads
window.onload = function() {
    window.scrollTo(0, 0);
};

$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        
        dots: true,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '15%'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '10%'
                }
            }
        ]
    });

    // Set Joseph George as active initially
    var initialSlideIndex = 0; // Index of Joseph George slide (0 based)
    $('.slider').slick('slickGoTo', initialSlideIndex);

    // Show Joseph George content initially
    $('.aboutJoseph').show();

    // Sync dots with slides
    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $('.dot').removeClass('active');
        $('.dot').eq(currentSlide).addClass('active');
    
        // Show corresponding content based on slide
        if (currentSlide === 0) {
            $('.aboutJoseph').show();
            $('.aboutHari, .aboutMichelle, .aboutGulshan, .aboutAdarsh').hide();
        } else if (currentSlide === 1) {
            $('.aboutHari').show();
            $('.aboutJoseph, .aboutMichelle, .aboutGulshan, .aboutAdarsh').hide();
        } else if (currentSlide === 2) {
            $('.aboutMichelle').show();
            $('.aboutJoseph, .aboutHari, .aboutGulshan, .aboutAdarsh').hide();
        } else if (currentSlide === 3) {
            $('.aboutGulshan').show();
            $('.aboutJoseph, .aboutHari, .aboutMichelle, .aboutAdarsh').hide();
        } else if (currentSlide === 4) {
            $('.aboutAdarsh').show();
            $('.aboutJoseph, .aboutHari, .aboutMichelle, .aboutGulshan').hide();
        }
    });

    // Click handler for dots
    $('.dot').on('click', function(){
        var slideIndex = $(this).index();
        $('.slider').slick('slickGoTo', slideIndex);
    });
});

$(document).ready(function () {
  $(".slider2").owlCarousel({
      items: 1, // Number of items to show
      loop: true, // Enable loop
      nav: true, // Show navigation arrows
      dots: true, // Hide pagination dots
      autoplay: false,
      navText: ['<button class="prev2"><</button>', '<button class="next2">></button>'],
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has accepted cookies before
    if (localStorage.getItem("cookiesAccepted") !== "true") {
      // Show the cookie popup if not accepted
      document.getElementById("cookie-popup").style.display = "block";
     
    }else {
      addGtag();
    }

     if(sessionStorage.getItem("cookiesRejected") == "true"){
      document.getElementById("cookie-popup").style.display = "none";
      
    }

    
  });
  
  function acceptCookies() {
    // Set a flag in local storage to remember that the user has accepted cookies
    localStorage.setItem("cookiesAccepted", "true");
  
    // Hide the cookie popup
    document.getElementById("cookie-popup").style.display = "none";

    addGtag();
    

  }

  function closePopup() {
    // Hide the cookie popup without storing in local storage
    sessionStorage.setItem("cookiesRejected", "true");
    document.getElementById("cookie-popup").style.display = "none";
  }