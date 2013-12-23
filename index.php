<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <!--[if gte IE 9]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
		<!--[if lt IE 9]><meta http-equiv="X-UA-Compatible" content="IE=7" /><![endif]-->
        <title>Season's Greetings from Em &amp; M</title>
        <meta name="description" content="">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/ecard.css">
		<?php
			//set custom image if the recipient is defined
			if ( isset($_GET['r']) ){
			    $recipient = $_GET['r'];
				
				$atPosition = strpos($recipient, '@');
				if (empty($atPosition)){
					$imagePath = 'img/backgrounds/'.$recipient.'.jpg';
				}
				
				//corrects the recipient name to exclude the "@" character and everything after it.
				else{
					$adjustedRecipient = substr($recipient, 0, $atPosition);
					$imagePath = 'img/backgrounds/'.$adjustedRecipient.'.jpg';
				}
				
				if (file_exists($imagePath)){
					echo "<style> canvas#card{ background-image: url('$imagePath'); } </style>";
				}
			}
		?>

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
		<!--[if lt IE 9]><script src="js/vendor/excanvas.js"></script><![endif]-->
    </head>
    <body>
        <div id="wrapper">
	        <h1>Season's greetings!</h1>
		      <audio>
		        <source src="audio/girl-with-the-flaxen-hair.ogg" type="audio/ogg"></source>
		        <source src="audio/girl-with-the-flaxen-hair.mp3" type="audio/mpeg"></source>
		        HTML5 Audio Not Available
		      </audio>
			<div id="canvas-container">
				<canvas id="card" width="1000" height="750"></canvas>
				<button id="play" type="button" autofocus="autofocus"></button>
				<button id="mute" type="button"></button>
			</div>
			<p>
				<a href="https://github.com/mrengy/xmas-ecard" title="browse the code used to create this" alt="browse the code used to create this">View code on Github</a>
			</p>
	    </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
        <script src="js/ecard.js"></script>

        <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-46656541-1', 'mike-eng.com');
		  ga('send', 'pageview');

		</script>
    </body>
</html>
