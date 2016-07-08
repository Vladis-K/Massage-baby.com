<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Извините, произошла ошибка! Пожалуйста, попробуйте заполнить форму еще раз.";
            exit;
        }

        $recipient = "ohmatdet.ko@gmail.com";
        $subject = "New contact from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Спасибо! Ваше сообщение было отправлено.";
        } else {
            http_response_code(500);
            echo "Что-то было выполнено неправильно заполнено и мы не смогли отправить ваше письмо.";
        }
    } else {
        http_response_code(403);
        echo "Произошла ошибка с вашим подтверждением, пожалуйста, повторите еще раз.";
    }
?>
