<?php
$isTestMode =  file_exists('.testModeFlag');

$logFile = __DIR__
    . str_replace('/', DIRECTORY_SEPARATOR, '/var/logs/emailNotSent.log');

if ($isTestMode == true) {
    file_put_contents($logFile, date(DATE_RFC822) . " Test mode is on\n", FILE_APPEND);
    $emailReceivers = 'a.smile.of.fortune@gmail.com';
} else {
    $emailReceivers = 'a.smile.of.fortune@gmail.com, sten_office@ukr.net, kantornadia@gmail.com';
}

if (array_key_exists('mail', $_POST)) {
    $headers = 'Content-type: text/plain; charset="utf-8"';
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";

    $subject = 'Заповнена контактна форма з ' . $_SERVER['HTTP_REFERER'];
    $subject = "=?utf-8?b?" . base64_encode($subject) . "?=";

    $message = "Ім'я: "
        . $_POST['Name']
        . "\nТелефон: "
        . $_POST['Telephone_number'];
    $message .= "\nE-mail: "
        . $_POST['mail']
        . "\nIP: "
        . $_SERVER['REMOTE_ADDR'];
    $message .= "\nКоментар: " . $_POST['Comment'];

    $isSent = mail($emailReceivers, $subject, $message, $headers);

    $logMsg .= date(DATE_RFC822) . "\n";
    $logMsg .= 'The mail has been sent - ' . (bool)$isSent . "\n";
    $logMsg .= $_POST['mail'] . ' ' . $_POST['Telephone_number'] . "\n";
    file_put_contents($logFile, $logMsg, FILE_APPEND);

    echo json_encode($isSent);
}