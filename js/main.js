// shrink logo on scroll
function resizeLogo() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 30) {
          $(".website-logo").addClass("smaller");
      } else {
          if ($(".website-logo").hasClass("smaller")) {
              $(".website-logo").removeClass("smaller");
          }
      }
  });
}

$(document).ready(function() {
  resizeLogo();
});

// change to transparent on scroll
$(window).scroll(function() {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 30);
});

// annoying icons position
$(window).scroll(function() {
  $('.mobile-icon-box').toggleClass('tricky-size', $(this).scrollTop() > 30);
});

// Header slide
$(document).ready(() => {
  $('#slideshow .slick').slick(
      {
          prevArrow: '.arrow-prev',
          nextArrow: '.arrow-next',
          autoplay: false,
          infinite: true,
          dots: true
      }
  );
});
// End header slide


// drift zoom

new Drift(document.querySelector('.drift-demo-trigger'), {
  paneContainer: document.querySelector('.detail'),
  zoomFactor: 1.5,
  inlinePane: false,
  handleTouch: false,
  hoverBoundingBox: false,
  hoverBoundingBox: true
});

