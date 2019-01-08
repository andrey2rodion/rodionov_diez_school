$(document).ready(function(){

$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,

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