$("#callback").ready(function() {
    $("#submit").click(function(e) {

        function DownloadingPriceUnblock(){
            if ($("#submit").isValid()) {
                document.getElementById("downloadPrice"). removeAttribute("disabled");
            }
        }
    });
});

/**
 * Created by Окси on 20.07.2016.
 */
