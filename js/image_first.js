/**
 * Created by Окси on 16.06.2016.
 */
document.getElementById('man').style.backgroundImage.load(function() {
    $(".notmain").attr('src', function() {
        return $(this).attr("data-src");
    });
});

var img = new Image();
img.src = 'images/TopBanner0.jpg';

var int = setInterval(function() {
    if (img.complete) {
        clearInterval(int);
        document.getElementsByTagName('man')[0].style.backgroundImage = 'images/TopBanner0.jpg(' + img.src + ')';
    }
}, 50);

setInterval(function() {
    var img = new Image();
    img.src = "images/TopBanner0.jpg"
    img.onload=function(){$(img).fadeIn(500);}
    img.style.display="none";
    document.getElementById('parent').appendChild(img);
}, 500);