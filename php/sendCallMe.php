<?php
$to      = 'rychkova@doc2me.ru, elmira68@list.ru';
$subject = 'Перезвоните мне пожалуйста';
    $message = '
                    Телефон: '.$_POST['phone'].'
             ';
    $headers .= "From: Отправитель <doc2me@list.ru>\r\n";

mail($to, $subject, $message, $headers);
?>