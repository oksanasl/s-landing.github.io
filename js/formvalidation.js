$(document).ready(function() {
    $('#submit').click(function(e) {
        var name = $('#Name').val();
        var tel = $('#Telephone_number').val();
        var mail = $('#mail').val();

        var name_regex = /^[A-Za-zА-Яа-яіїє-]+$/;
        var tel_regex = /[0-9]{10,}+$/;
        var email_regex = /^[\w\-\.\+]+\@[a-zA-Zа-яА-Яіїє0-9\.\-]+\.[a-zA-zа-я0-9]{2,4}$/;
                            // /^([a-zа-яіїє0-9_\.-]+)@([a-а-я-9_\.-]+)\.([a-z\.]{2,6})$/
        if (name.length == 0) {
            $('#rule').text("Усі поля відмічені * є обов'язковими для заповнення");
            $("#name").focus();
            return false;
        }

        else if (!name.match(name_regex) || name.length == 0) {
            $('#r1').text("Використовуйте лише букви");
            $("#name").focus();
            return false;
        }

        else if (!tel.match(tel_regex) || tel.length == 0) {
            $('#r2').text("Будь ласка, введіть телефон у зазначеному форматі");
            $("#tel").focus();
            return false;
        }
        else if (!mail.match(email_regex) || mail.length == 0) {
            $('#r3').text("Будь ласка, введіть дійсну e-mail адресу");
            $("#mail").focus();
            return false;
        }
 else {
            $("#modal").modal("show");
            return true;
        }
    });
});/**
 * Created by Окси on 19.07.2016.
 */


$('#callback').ready(function() {
    $('#submit').click(function(e) {

        function DownloadingPriceUnblock(){
        if ($('#submit').isValid()) {
        document.getElementById('downloadPrice'). removeAttribute('disabled')
    }
};
    });
})