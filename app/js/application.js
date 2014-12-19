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






// FIX THIS AFTER NAV IS FULLY BUILT

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if ( locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 5000, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
        $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});
