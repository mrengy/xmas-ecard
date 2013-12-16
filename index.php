<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Season's Greetings from Em &amp; M</title>
        <meta name="description" content="">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/ecard.css">
		<link rel="stylesheet" href="css/bbplayer.css">
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
    </head>
    <body>
        <div id="wrapper">
	        <h1>Season's greetings!</h1>
			<div class="bbplayer">
			  <span class="bb-play"></span>
		      <audio>
		        <source src="audio/girl-with-the-flaxen-hair.ogg" type="audio/ogg"></source>
		        <source src="audio/girl-with-the-flaxen-hair.mp3" type="audio/mpeg"></source>
		        HTML5 Audio Not Available
		      </audio>
		      <div class="bb-label">Optional debug panel:</div>
		      <div class="bb-debug"></div>
		    </div>
			<canvas id="card" width="1000" height="750"></canvas>
			<button id="play" type="button" autofocus="autofocus"></button>
	    </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
		<script src="js/vendor/bbplayer.js"></script>
        <script src="js/ecard.js"></script>

        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
