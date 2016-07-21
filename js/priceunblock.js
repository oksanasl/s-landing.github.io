jQuery(document).ready(function () {
    jQuery('#downloadPrice').click(function() {
        if ($('#downloadPrice').prop('disabled') ) {
            $("#fillFormMsg").toggle();
        }
    });
});