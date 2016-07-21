/**
 * Created by Окси on 12.07.2016.
 */
jQuery(document).ready(function () {
    document.addEventListener('submit', function(evt){
        var http = new XMLHttpRequest(), f = this;
        evt.preventDefault();
        http.open("POST", "http://cten.com.ua/email_sender.php", true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(
            "Name=" + f.getElementById('Name').value 
            + "&Telephone_number=" + f.getElementById('Telephone_number').value 
            + "&mail=" + f.getElementById('mail').value 
            + "&Comment=" + f.getElementById('Comment').value);
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                $("#modal").modal("show");
                document.getElementById("#downloadPrice").removeAttribute("active");
                // alert(http.responseText + ', Ваше повідомлення отримано.\nНаші спеціалісти дадуть відповідь Вам протягом 10 хв.\nМи вдячні Вам за інтерес до нашої компанії!');
                // f.Name.removeAttribute('value'); // очистить поле сообщения (две строки)
                // f.Name.value='';
            }
        }
        http.onerror = function() {
            alert('Вибачте, дані не були передані');
        }
    }, false);
});
