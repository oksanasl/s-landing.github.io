/**
 * Created by Окси on 28.06.2016.
 */
/**
 * Landing page language translator
 *
 * @param langFlag
 */
function translator (langFlag) {
    $("html").attr('lang', langFlag);
    var dataAttr = 'data-lang-' + langFlag;
    var tags = $("[" + dataAttr + "]");
    langFlag = "lang-" + langFlag;
    $(tags).each(function(){
        $(this).html(
            $(this).data(langFlag)
        );
    });
};