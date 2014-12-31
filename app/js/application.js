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
    handleHash();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".top_link").fadeIn();
    } else {
      $(".top_link").fadeOut();
    }
  });

  checkApp();
  
});

function checkApp() {
  if (window.location.search.indexOf('app') > -1) {
    $('.app_alert').show();
  }
}

function handleHash() {
  var hash;
  hash = window.location.hash.replace('#', '');
  if (/^.*#$/.test(window.location.href)) {
    window.history.replaceState("", "", window.location.href.replace('#', ''));
  }
}

$(".close_alert").click(function(e) {
  e.preventDefault();
  $(".app_alert").fadeOut();
})

$("#mh_logo").click(function() {
  $("html, body").animate({ scrollTop: "0" }, 300, "swing");
  handleHash();
});

$("#backToTop").click(function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: "0" }, 300, "swing");
  handleHash();
});

$(".year_nav").click(function() {
  console.log("hi again")
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
        }, 600);
        return false;
      }
    }
  });
});
