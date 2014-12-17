$(function() {
	$(".lazy").lazyload({
		effect : 'fadeIn',
		threshold : 200
	});
});

$("#mh_logo").click(function() {
  $("html, body").animate({ scrollTop: "0" }, 300, "swing");
});

// FIX THIS AFTER NAV IS FULLY BUILT

// $('a').click(function(){
//   $('html, body').animate({
//     scrollTop: $( $.attr(this, 'href') ).offset().top
//   }, 300, "swing");
//   return false;
// });
