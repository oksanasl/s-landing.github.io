/**
 * Created by Окси on 12.07.2016.
 */
jQuery(document).ready(function () {
    document.addEventListener('submit', function(evt){
        evt.preventDefault();

        $(".overlay_downloadPrice").hide();
        $("#fillFormMsg span").hide();
        $("#downloadPrice").removeClass("nonactive");
        var callbackFormNotSent = true;
        // jQuery.cookie("callbackFormNotSent", false);

        var form = this;
        var formData = "Name=" + form.getElementById('Name').value
            + "&Telephone_number=" + form.getElementById('Telephone_number').value
            + "&mail=" + form.getElementById('mail').value
            + "&Comment=" + form.getElementById('Comment').value;
        
        jQuery.ajax({
            type: "POST",
            url: "/email_sender.php",
            data: formData,
            success:function(data){
                if (data === "true") {
                    $("#modal").modal("show");
                    document.getElementById("downloadPrice").removeAttribute("disabled");
                    // $(".overlay_downloadPrice").toggle();
                    // $("#fillFormMsg span").hide();
                } else {
                    alert(data)
                }
        },
            error: function(data){
                alert(data + 'Вибачте, дані не були передані');
            }
        });
    }, false);
});
