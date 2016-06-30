/**
 * Created by Окси on 28.06.2016.
 */
/**
 * Landing page language translator
 *
 * @param lang
 */
<<<<<<< Updated upstream
function translator (lang) {
    var tags = $("[data-lang-" + lang + "]");
    $("html").attr('lang', lang);

    $(tags).each(function(){
        var tag = $(this);
        var dataLangAttr = "lang-" + lang;
        tag.html(
            tag.data(dataLangAttr)
        );
        if (tag.attr("placeholder") != undefined) {
            tag.attr(
                "placeholder",
                tag.data(dataLangAttr)
            ).text("");
        }
    });
};