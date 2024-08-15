//scroll

var navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  navbar.classList.toggle(".sticky", window.scrollY > 0);
});

// slider


$(document).ready(function () {
  // header slider
  $('#header-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      }

    }
  });
  // project slider

  $('#project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 1000,
    dots: false,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: false,
        nav: false,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
      }
    }
  });

  // review slider

  $('#review-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
    smartSpeed: 800,

  })

});

// contacts 

function emailSend(){


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "okindajoseph76@gmail.com",
    Password : "4B002ED0F5AC35EBB5807A091B41393C0243",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => {}
  );
}




// scroll reveal

var ScrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};



ScrollReveal().reveal(".display-4", {
  ...ScrollRevealOption
});
