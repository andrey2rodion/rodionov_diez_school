$(document).ready(function(){

$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});	


$('.field-select').chosen({
	disable_search_threshold: 10,
});

});


var toggler = document.getElementById('toggler');
toggler.addEventListener('click', mainNavVisibleToggle);
function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
}