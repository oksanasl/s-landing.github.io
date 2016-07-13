<?php
 print_r($__POST);
if (array_key_exists('Subject', $_POST)) {
   $to = 'a.smile.of.fortune@gmail.com';
   $subject = 'Заповнена контактна форма з '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Ім'я: ".$_POST['Name']."\nТелефон: ".$_POST['Subject']."\nE-mail: ".$_POST['E-mail']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nКоментар: ".$_POST['Comment'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['Name'];
}
?>