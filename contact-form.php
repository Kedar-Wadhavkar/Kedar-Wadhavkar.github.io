<?php
	if(isset($_POST['submit']))
	{
		$name = $_POST['name'];
		$visitor_email = $_POST['email'];

		$to = "kdkingdomcoc@gmail.com";

		$subject = "New Form Submission";

		$message = "Name: ".$name."\n".
			"User Email: ".$visitor_email."\n";
		
		$email_from = "kdkingdomcoc@gmail.com";

		$headers = "From: " .$email_from;


		if(mail($to, $subject, $message, $headers))
		{
			echo "<h1>Sent Successfully! Thank you!"." ".$name.", We willcontact you shortly!</h1>";
		}
	
		else
		{
		    echo "Something went wrong!";
		}
	}
?>