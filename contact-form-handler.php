<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'email.jordanschulte@gmail.com';
    $email_subject = 'Form Submission';
    $email_body = 'Username: $name.\n'.
                    'User e-mail: $visitor_email.\n'.
                        'User message: $message.\n';

    $to = 'email.jordanschulte@gmail.com';
    $headers = 'From: $email_form \r\n';
    $headers .= 'Reply-To: $visitor_email \r\n';

    mail($to,$email_subject,$email_body,$headers);
    header('Location: contact.html');
?>