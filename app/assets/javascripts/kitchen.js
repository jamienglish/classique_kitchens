$(function() {
  $('.stormer #slideshow .kitchen:gt(0)').hide();

  setInterval(function() {
    $('.stormer #slideshow .kitchen:first-child').fadeOut(1000)
      .next('.kitchen').fadeIn(1000)
      .end().appendTo('#slideshow');
  }, 5000);
});
