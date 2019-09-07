<?php
$to      = 'rychkova@doc2me.ru, elmira68@list.ru';
$subject = 'Обратный звонок';
    $message = '
                    Имя: '.$_POST['name'].'
                    Телефон: '.$_POST['phone'].'
                    Проблема: '.$_POST['problem'].'
             ';
  $headers .= "From: Отправитель <doc2me@list.ru>\r\n"; //Наименование и почта отправителя

mail($to, $subject, $message, $headers);
?>