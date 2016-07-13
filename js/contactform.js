/**
 * Created by Окси on 12.07.2016.
 */
document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "/email_sender.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("Name=" + f.Name.value + "&Telephone_number=" + f.Telephone_number.value + "&mail=" + f.mail.value + "&Comment=" + f.Comment.value);
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText + ', Ваше повідомлення отримано.\nНаші специалисти дадуть відповідь Вам протягом 10 хв.\nМи вдячні Вам за інтерес до нашої компанії!');
            f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
            f.messageFF.value='';
        }
    }
    http.onerror = function() {
        alert('Вибачте, дані не були передані');
    }
}, false);