var callbackFormNotSent = true;
// jQuery.cookie("callbackFormNotSent", true);

jQuery(document).ready(function () {
    jQuery('.overlay_downloadPrice').click(function() {
        if (callbackFormNotSent) {
            jQuery("#downloadPrice").addClass("nonactive");
            jQuery("#fillFormMsg span").show();
            // if ($('#downloadPrice').attr("disabled") ) {
            //     $(".overlay_downloadPrice").toggle("hide");
            // }
        }
    });
});