<?php
$to      = 'rychkova@doc2me.ru, elmira68@list.ru';
$subject    = 'Консультация с доктором';
    $message = '
                    Имя: '.$_POST['name'].'
                    Телефон: '.$_POST['phone'].'
                    Проблема: '.$_POST['problem'].'
                    Доктор: '.$_POST['doctor'].'
             ';
    $headers .= "From: Отправитель <doc2me@list.ru>\r\n";
mail($to, $subject, $message, $headers);
?>