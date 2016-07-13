<?php
if (array_key_exists('Subject', $_POST)) {
   $logFile = 'var/logs/emailNotSent.log';

   $to = 'a.smile.of.fortune@gmail.com';
   $subject = 'Заповнена контактна форма з ' . $_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?" . base64_encode($subject) . "?=";
   $message = "Ім'я: " . $_POST['Name'] . "\nТелефон: " . $_POST['Subject']
                . "\nE-mail: " . $_POST['E-mail'] . "\nIP: " . $_SERVER['REMOTE_ADDR']
                . "\nКоментар: " . $_POST['Comment'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   try {
      mail($to, $subject, $message, $headers);
      header('Location: ' . $_SERVER['HTTP_REFERER'] . '#ContactForm');
   } catch (Exception $e){
        $logMsg = (string)date();
        $logMsg .= '\n\r' . $_POST['E-mail'] . ' ' . $_POST['Subject'];
        $logMsg .= '\n\r' . $e->getMessage();
        $logMsg .= '----------------------------------------------------';
        file_put_contents($logFile, $logMsg, 'FILE_APPEND');
   }
}
?>