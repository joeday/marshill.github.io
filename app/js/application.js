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

$(".year_nav").click(function(e) {
  if (window.matchMedia("(max-width: 767px)").matches) { 
    $("#tNav").removeClass("visible-xs");
    $("#tNav").addClass("hidden-xs");
  }
})

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
