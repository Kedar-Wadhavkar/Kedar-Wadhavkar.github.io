<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];

	$email_from = 'kedar.wadhavkar@gmail.com';
	
	$email_subject = "New Form Submission";

	$email_body = "Username: $name.\n".
			"User Email: $visitor_email.\n";

	$to = "kedar.wadhavkar@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers = "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);
	
	header("Location: projects.html");

?>