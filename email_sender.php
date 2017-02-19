<?php
 $logFile = '/cten.com.ua/www/var/logs/emailNotSent.log';
 $to = 'a.smile.of.fortune@gmail.com, sten_office@ukr.net, kantornadia@gmail.com';

if (array_key_exists('mail', $_POST)) {
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   $subject = 'Заповнена контактна форма з ' . $_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?" . base64_encode($subject) . "?=";

   $message = "Ім'я: " . $_POST['Name'] . "\nТелефон: " . $_POST['Telephone_number'];
   $message .= "\nE-mail: " . $_POST['mail'] . "\nIP: " . $_SERVER['REMOTE_ADDR'];
   $message .= "\nКоментар: " . $_POST['Comment'];

   $logMsg = (string)date('l jS \of F Y h:i:s A');
   $logMsg .= '\n\r' . $_POST['mail'] . ' ' . $_POST['Telephone_number'];

   try {
      $isSent = mail($to, $subject, $message, $headers);
      $logMsg .= '\n\r mail should be sent';
      $logMsg .= '\n\r -----------------------------------------------';
      file_put_contents(
        $logFile,
        $logMsg,
        'FILE_APPEND'
      );
      echo json_encode($isSent);
   } catch (Exception $e){
        $logMsg .= '\n\r' . $e->getMessage();
        $logMsg .= '----------------------------------------------------';
        file_put_contents(
            $logFile,
            $logMsg,
            'FILE_APPEND'
        );
        echo json_encode($e->getMessage());
   }
}
?>