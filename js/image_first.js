// var elements = document.getElementsByClassName("first_hide");
//
// document.getElementById("man").style.backgroundImage.onLoad(function(){
//     elements.removeClass("hide")
// });


var bgImg = $("#man").css("background-image", "url('/images/TopBanner0.jpg')");
bgImg.onload = function(){
    $("#man").style.backgroundImage = 'url(' + bgImg.src + ')';
};
// bgImg.src = imageLocation;

var listOfId = jQuery("#logo_man, #hr_man, #arrow_banner1, #myNavbar1");

    jQuery("#man").css("background-image", "url('/images/TopBanner0.jpg')").on('load', function() {
        jQuery.each(listOfId).removeClass("hide");
    });

// $(function( )
// {
// var background = document.getElementById("#man").style.backgroundImage = 'url(/images/TopBanner0.jpg)';
//     var elements = document.getElementsByClassName("first_hide");
//
//         background.onLoad = function( ){
//         elements.removeClass("hide")
//     };
//         background.src = $("man").css("background-image");
// });

$(document).ready(function () {
    jQuery("a[data-slide=next]").trigger("click");
});