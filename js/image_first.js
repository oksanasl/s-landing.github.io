/**
 * Created by Окси on 16.06.2016.
 */
(function (window, $) {
    $(function () {
        
        $('#man ').on('load', function(alert){
            $(".navbar").toggleClass('.show');
            $(".arrow").toggleClass('.show');
            $("#hr_man").toggleClass('.show');
            return false;
        });
    });
})(window, jQuery);
/*$(document).ready(function(){
    $('#man ').on('load', function(){
        $(".navbar").toggleClass('.show');
        $(".arrow").toggleClass('.show');
        $("#hr_man").toggleClass('.show');
        return false;
    });
});*/

