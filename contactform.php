<?php
	if(isset($_POST['submit']))
	{
		$name = $_POST['name'];
		$visitor_email = $_POST['email'];

		$to = "kedar.feedback@yahoo.com";

		$subject = "New Form Submission";

		$message = "Name: ".$name."\n".
			"User Email: ".$visitor_email."\n";
		
		$email_from = "kedar.feedback@yahoo.com";

		$headers = "From: " .$email_from;


		mail($to, $subject, $message, $headers);
		
	}
?>