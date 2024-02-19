<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = strip_tags(trim($_POST["message"])); // Get the input and sanitize it

    // Set your email address
    $toEmail = "your.email@example.com";
    $subject = "Message from Your Website";

    // Set the email headers
    $headers = "From: Your Website <noreply@yourdomain.com>\r\n";
    $headers .= "Reply-To: noreply@yourdomain.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($toEmail, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>