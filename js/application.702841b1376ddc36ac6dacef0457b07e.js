$(function() {
	$(".lazy").lazyload({
		effect : 'fadeIn',
		threshold : 200
	});
  
  $(".tLink").click(function(e) {
    e.preventDefault();
    
    if ($("#tNav").hasClass("hidden-xs")) {
      $("#tNav").removeClass("hidden-xs");
      $("#tNav").addClass("visible-xs");
    } else {
      $("#tNav").removeClass("visible-xs");
      $("#tNav").addClass("hidden-xs");
    }

  });
  
  $(window).bind ('hashchange', function () {
    handleSignInHash();
  });

});


function handleSignInHash() {
  var hash;
  hash = window.location.hash.replace('#', '');
  if (/^.*#$/.test(window.location.href)) {
    window.history.replaceState("", "", window.location.href.replace('#', ''));
  }
}

$("#mh_logo").click(function() {
  $("html, body").animate({ scrollTop: "0" }, 300, "swing");
  handleSignInHash();
});

$(".year_nav").click(function() {
  if (window.matchMedia("(max-width: 768px)").matches) { 
    $("#tNav").removeClass("visible-xs");
    $("#tNav").addClass("hidden-xs");
  }
})






// FIX THIS AFTER NAV IS FULLY BUILT
//
// $('a').click(function(){
//   $('html, body').animate({
//     scrollTop: $( $.attr(this, 'href') ).offset().top
//   }, 300, "swing");
//   return false;
// });
