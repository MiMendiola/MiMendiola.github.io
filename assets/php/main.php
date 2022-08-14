<?php

    $name = $_POST['name'];
    $visit_email = $_POST['email'];
    $message = $_POST['message'];

    $to = "mglmendiol@gmail.com";
    $email_from = 'CV_Online';

    $email_subject = 'New submission';

    $email_body = 'You have received a message from $name.\n Here is the message:\n $message';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header('Location: index.html');

?>