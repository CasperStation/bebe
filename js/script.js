$(document).ready(function(){
    initAll();
    
    $(window).on("orientationchange", function(){
        clearTimeout(trigger);
        initAll();
    });
    
    $(window).resize(function(){
        clearTimeout(trigger);
        initAll();
    });
});

function initAll(){
    $('.banner-orig').each(function(){
        initBanner($(this));
    });
    trigger = setTimeout(function(){
       $('.banner-orig').each(function(){
           changeAnim($(this));
       });
    }, 25000);
}

function initBanner(banner){
    if(!banner.next().hasClass('banner-clone')){
     var bannerTwo = banner.clone();
      bannerTwo.appendTo(banner.parent());
      bannerTwo.addClass('banner-clone');
      bannerTwo.removeClass('banner-orig');
    } else {
     var bannerTwo = banner.next('.banner-clone');
    }
  banner.css('animation', 'scroll-start 25s linear 1');
  banner.css('-webkit-animation', 'scroll-start 25s linear 1');
  bannerTwo.css('animation', 'scroll-second 50s linear infinite');
  bannerTwo.css('-webkit-animation', 'scroll-second 50s linear infinte');
}

function changeAnim(banner){
    banner.css('animation', 'scroll 50s linear infinite');
    banner.css('-webkit-animation', 'scroll 50s linear infinite');
}