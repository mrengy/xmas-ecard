$( document ).ready(function() {
	var ctx;
	var WIDTH;
	var HEIGHT;
	var intervalId = 0;
	var frame = 0;
	
	var audioPlayer;
	var playerMuted = false;
	
	var emflakes = [];
	var emflake = new Image();
	emflake.src = 'img/emflake.png';
	var ex = ex0 = 100;
	var ey = ey0 = -299;
	var ew;
	var eh;
	//set natural width and natural height once the image is loaded
	if (emflake.addEventListener){
		emflake.addEventListener('load', function(){
			ew = emflake.naturalWidth;
			eh = emflake.naturalHeight;
		}, false);
	} else if (emflake.attachEvent){
		emflake.attachEvent('onload', function(){
			ew = emflake.naturalWidth;
			eh = emflake.naturalHeight;
		});
	}
	
	var mikeflakes = [];
	var mikeflake = new Image();
	mikeflake.src = 'img/mikeflake.png';
	var mx = mx0 = 300;
	var my = my0 = -641;
	var mw;
	var mh;
	//set natural width and natural height once the image is loaded
	if (mikeflake.addEventListener){
		mikeflake.addEventListener('load', function(){
			mw = mikeflake.naturalWidth;
			mh = mikeflake.naturalHeight;
		}, false);
	} else if (mikeflake.attachEvent){
		mikeflake.attachEvent('onload', function(){
			mw = mikeflake.naturalWidth;
			mh = mikeflake.naturalHeight;
		});
	}
	
	var lightnings = [];
	var lightning = new Image();
	lightning.src = 'img/lightning.png';
	var lx;
	var lx0;
	var ly = ly0 = 100;
	var dlx = 2;
	var dly = 0;
	var lw;
	var lh;
	//set natural width and natural height once the image is loaded
	if (lightning.addEventListener){
		lightning.addEventListener('load', function(){
			lw = lightning.naturalWidth;
			lh = lightning.naturalHeight;
			lx = lx0 = (0 - lw);
		}, false);
	} else if (lightning.attachEvent){
		lightning.attachEvent('onload', function(){
			lw = lightning.naturalWidth;
			lh = lightning.naturalHeight;
			lx = lx0 = (0 - lw);
		});
	}
	
	var frys = [];
	var fry = new Image();
	fry.src = 'img/fry.png';
	var fx = fx0 = -100;
	var fy = fy0 = 200;
	var dfx = 2;
	var dfy = 0;
	var fw;
	var fh;
	//set natural width and natural height once the image is loaded
	if (fry.addEventListener){
		fry.addEventListener('load', function(){
			fw = fry.naturalWidth;
			fh = fry.naturalHeight;
		}, false);
	} else if (fry.attachEvent){
		fry.attachEvent('onload', function(){
			fw = fry.naturalWidth;
			fh = fry.naturalHeight;
		});
	}
	
	var fishBanner = new Image();
	fishBanner.src = 'img/fishBanner.png';
	var fbx;
	var fby = 200;
	var fbw;
	var fbh;
	//set natural width and natural height once the image is loaded
	if (fishBanner.addEventListener){
		fishBanner.addEventListener('load', function(){
			fbw = fishBanner.naturalWidth;
			fbh = fishBanner.naturalHeight;
			//set x position to be at the left edge of the canvas
			fbx = 0 - (fbw + lw -10);
		}, false);
	} else if (fishBanner.attachEvent){
		fishBanner.attachEvent('onload', function(){
			fbw = fishBanner.naturalWidth;
			fbh = fishBanner.naturalHeight;
			//set x position to be at the left edge of the canvas
			fbx = 0 - (fbw + lw -10);
		});
	}
	
	var kepler1 = new Image();
	kepler1.src = 'img/kepler1.png';
	var k1x;
	var k1y = 430;
	var k1w;
	var k1h;
	//set natural width and natural height once the image is loaded
	if (kepler1.addEventListener){
		kepler1.addEventListener('load', function(){
			k1w = kepler1.naturalWidth;
			k1h = kepler1.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k1x = WIDTH - k1w;
		}, false);
	} else if (kepler1.attachEvent){
		kepler1.attachEvent('onload', function(){
			k1w = kepler1.naturalWidth;
			k1h = kepler1.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k1x = WIDTH - k1w;
		});
	}
	
	var kepler2 = new Image();
	kepler2.src = 'img/kepler2.png';
	var k2x;
	var k2y = 430;
	var k2w;
	var k2h;
	//set natural width and natural height once the image is loaded
	if (kepler2.addEventListener){
		kepler2.addEventListener('load', function(){
			k2w = kepler2.naturalWidth;
			k2h = kepler2.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k2x = WIDTH - k2w;
		}, false);
	} else if (kepler2.attachEvent){
		kepler2.attachEvent('onload', function(){
			k2w = kepler2.naturalWidth;
			k2h = kepler2.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k2x = WIDTH - k2w;
		});
	}
	
	var kepler3 = new Image();
	kepler3.src = 'img/kepler3.png';
	var k3x;
	var k3y = 530;
	var k3w;
	var k3h;
	//set natural width and natural height once the image is loaded
	if (kepler3.addEventListener){
		kepler3.addEventListener('load', function(){
			k3w = kepler3.naturalWidth;
			k3h = kepler3.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k3x = WIDTH - k3w;
		}, false);
	} else if (kepler3.attachEvent){
		kepler3.attachEvent('onload', function(){
			k3w = kepler3.naturalWidth;
			k3h = kepler3.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k3x = WIDTH - k3w;
		});
	}
	
	var kepler4 = new Image();
	kepler4.src = 'img/kepler4.png';
	var k4x;
	var k4y = 510;
	var k4w;
	var k4h;
	//set natural width and natural height once the image is loaded
	if (kepler4.addEventListener){
		kepler4.addEventListener('load', function(){
			k4w = kepler4.naturalWidth;
			k4h = kepler4.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k4x = WIDTH - k4w;
		}, false);
	} else if (kepler4.attachEvent){
		kepler4.attachEvent('onload', function(){
			k4w = kepler4.naturalWidth;
			k4h = kepler4.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k4x = WIDTH - k4w;
		});
	}
	
	var kepler5 = new Image();
	kepler5.src = 'img/kepler5.png';
	var k5x;
	var k5y = 540;
	var k5w;
	var k5h;
	//set natural width and natural height once the image is loaded
	if (kepler5.addEventListener){
		kepler5.addEventListener('load', function(){
			k5w = kepler5.naturalWidth;
			k5h = kepler5.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k5x = WIDTH - k5w;
		}, false);
	} else if (kepler5.attachEvent){
		kepler5.attachEvent('onload', function(){
			k5w = kepler5.naturalWidth;
			k5h = kepler5.naturalHeight;
			//set kepler x position to be at the right edge of the canvas
			k5x = WIDTH - k5w;
		});
	}
	//snow build variables
	var firstSnowBuildFrame = 500;
	var snowFadeInRate = .001;
	var snow1alpha = snow2alpha = snow3alpha = 0;
	var lastSnowBuildFrame;
	
	//kepler variables
	var framesBetweenSnowBuildAndKepler = 20;
	var keplerFadeRate = .005;
	var k1alpha = k2alpha = k3alpha = k4alpha = k5alpha = 0;
	var keplerPauseFrames = 200;
	var k1peaked = k2peaked = k3peaked = k4peaked = k5peaked = false;
	var k1peakedFrame;
	var k2peakedFrame;
	var k3peakedFrame;
	var k4peakedFrame;
	var k5peakedFrame;
	var k1done = k2done = k3done = k4done = k5done = false;
	var k1doneFrame;
	var k2doneFrame;
	var k3doneFrame;
	var k4doneFrame;
	var k5doneFrame;
	
	
	//flake variables
	var flakeFrequency = 300; //higher number = fewer flakes
	var flakeIncrement = 4; //base speed at which flakes fall
	
	//bonus banner variables
	var fishBannerDoneFrame;
	var banner1DoneFrame;
	var banner2DoneFrame;
	var banner3DoneFrame;
	var banner4DoneFrame;
	var bannerDelay = 300;
	
	var bbTop = 318.5;
	var bbCenter = 338.5;
	var bbBottom = 358.5;
	var bbBaseline = 344.5;
	var bbFry = 330;
	
	//initial x positions for each banner element, including text and fry
	var bb1x = [-502, -170, -149, -170, -502, -481, -502, -149, -85, -466, -87];
	var bb2x = [-522, -170, -149, -170, -522, -501, -522, -149, -85, -486, -87];
	var bb3x = [-1012, -170, -149, -170, -1012, -991, -1012, -149, -85, -976, -87];
	var bb4x = [-242, -170, -149, -170, -242, -221, -242, -149, -85, -206, -87];
	
	
	function init(){
		//set context
		var canvas = (typeof(G_vmlCanvasManager) != 'undefined') ? G_vmlCanvasManager.initElement($("canvas#card")[0]) : $("canvas#card")[0];
		ctx = canvas.getContext('2d');
	    ctx.font = "20.0px Arial, Helvetica, sans-serif";
		WIDTH = $("canvas#card").width();
		HEIGHT = $("canvas#card").height();
		
		audioPlayer = $('.audio audio')[0];
	}
	
	function toggleMute(){
		if(playerMuted == false){ 
			//variable to force iOS to know that the icon is supposed to be shown in the muted state, even though it doesn't respect actually muting
			playerMuted = true;
			
			$('button#mute').addClass('muted');
			
			//actually mutes the audio
			audioPlayer.muted = true;
		}
		else{ 
			playerMuted = false;
			$('button#mute').removeClass('muted');
			audioPlayer.muted = false;
		}
	}
	
	function startDrawing(){
		$('button#play').hide();
		intervalId = setInterval(draw, 10);
		
		//only play audio if the browser supports it. Thanks, Microsoft 
		if(typeof audioPlayer != 'undefined'){
			audioPlayer.play();
		}
	}
	
	function draw(){
		frame ++;
		clear();
		
		//only when snow build is done, draw the lightning
		if (snow3alpha >= 1){
			
			//create a new lightning
			if (getRandomInt(1, flakeFrequency) == 1){ 
				lightningw = getRandomInt(80, lw);
				lightningh = (lightningw * lh / lw);
				lightningy = getRandomInt(0 - (lightningh/2), HEIGHT - (lightningh/2));
				lightningIncrement = flakeIncrement * (lightningw / lw);
				lightnings.push({
					thisx: lx0,
					thisy: lightningy,
					thisw: lightningw,
					thish: lightningh,
					thisIncrement: lightningIncrement				
				});
			}

			//move all lightnings
			$.each(lightnings, function (index, value){
				if (value.thisx <= WIDTH){
					drawCharacter(lightning, value.thisx, value.thisy, value.thisw, value.thish);
					value.thisx += value.thisIncrement;
				} 
				else {
					//remove the mikeflake from the array if it is off screen
					lightnings.splice(index, 1);
					return false;
				}
			});
			
			//create a new fry
			if (getRandomInt(1, flakeFrequency) == 1){ 
				fryw = getRandomInt(20, fw);
				fryh = (fryw * fh / fw);
				fryy = getRandomInt(0 - (fryh/2), HEIGHT - (fryh/2));
				fryIncrement = flakeIncrement * (fryw / fw);
				frys.push({
					thisx: fx0,
					thisy: fryy,
					thisw: fryw,
					thish: fryh,
					thisIncrement: fryIncrement				
				});
			}

			//move all frys
			$.each(frys, function (index, value){
				if (value.thisx <= WIDTH){
					drawCharacter(fry, value.thisx, value.thisy, value.thisw, value.thish);
					value.thisx += value.thisIncrement;
				} 
				else {
					//remove the mikeflake from the array if it is off screen
					frys.splice(index, 1);
					return false;
				}
			});
		} //end conditional for drawing lightning
		
		if (k5peaked == true){
			//draw fishBanner if kepler is done
			if (fbx < WIDTH){
				drawCharacter(fishBanner, fbx, fby, fbw, fbh);
				fbx += (flakeIncrement / 3);

				drawCharacter(lightning, lx, (fby + 10), lw, lh);
				lx += (flakeIncrement /3);
			} else if (fbx >= WIDTH && typeof fishBannerDoneFrame === 'undefined'){
				fishBannerDoneFrame = frame;
			}
		}
		
		//start bonus banner 1 after fishBanner is done and the delay has passed
		if (frame > (fishBannerDoneFrame + bannerDelay) && bb1x[0] < WIDTH){
			// bonusBanner1 Background
		      ctx.save();
		      ctx.beginPath();
		      ctx.moveTo(bb1x[0], bbTop);
		      ctx.lineTo(bb1x[1], bbTop);
		      ctx.lineTo(bb1x[2], bbCenter);
		      ctx.lineTo(bb1x[3], bbBottom);
		      ctx.lineTo(bb1x[4], bbBottom);
		      ctx.lineTo(bb1x[5], bbCenter);
		      ctx.lineTo(bb1x[6], bbTop);
		      ctx.closePath();
		      ctx.fillStyle = "rgb(255, 255, 255)";
		      ctx.fill();
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

		      // bonusBanner1Text/Thats about all we have to say
		      ctx.save();
		      ctx.fillText("That's about all we have to say.", bb1x[9], bbBaseline);

		      // bonusBanner1 String
		      ctx.beginPath();
		      ctx.moveTo(bb1x[7], bbCenter);
		      ctx.lineTo(bb1x[8], bbCenter);
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();
	
			  //draw fry
			  drawCharacter(fry, bb1x[10], bbFry, fw, fh);
			
			//move banner 1 by incrementing all values in the x position array
			$.each( bb1x, function( i, currentPoint ) {
				currentPoint += (flakeIncrement / 3);
				bb1x[i] = currentPoint;
			});
		} else if (bb1x[0] >= WIDTH && typeof banner1DoneFrame === 'undefined'){
			banner1DoneFrame = frame;
		}
		//end bonus banner 1
	
		//start bonus banner 2 when ready
		if (frame > (banner1DoneFrame + bannerDelay) && bb2x[0] < WIDTH){
			// bonusBanner2 Background
		      ctx.save();
		      ctx.beginPath();
		      ctx.moveTo(bb2x[0], bbTop);
		      ctx.lineTo(bb2x[1], bbTop);
		      ctx.lineTo(bb2x[2], bbCenter);
		      ctx.lineTo(bb2x[3], bbBottom);
		      ctx.lineTo(bb2x[4], bbBottom);
		      ctx.lineTo(bb2x[5], bbCenter);
		      ctx.lineTo(bb2x[6], bbTop);
		      ctx.closePath();
		      ctx.fillStyle = "rgb(255, 255, 255)";
		      ctx.fill();
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

		      // bonusBanner2Text
		      ctx.save();
		      ctx.fillText("We're getting tired of pulling these.", bb2x[9], bbBaseline);

		      // bonusBanner2 String
		      ctx.beginPath();
		      ctx.moveTo(bb2x[7], bbCenter);
		      ctx.lineTo(bb2x[8], bbCenter);
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

			  //draw fry
			  drawCharacter(fry, bb2x[10], bbFry, fw, fh);

			//move banner 2 by incrementing all values in the x position array
			$.each( bb2x, function( i, currentPoint ) {
				currentPoint += (flakeIncrement / 3);
				bb2x[i] = currentPoint;
			});
		} else if (bb2x[0] >= WIDTH && typeof banner2DoneFrame === 'undefined'){
			banner2DoneFrame = frame;
		}
		//end bonus banner 2
	
		//start bonus banner 3 when ready
		if (frame > (banner2DoneFrame + bannerDelay) && bb3x[0] < WIDTH){
			// bonusBanner3 Background
		      ctx.save();
		      ctx.beginPath();
		      ctx.moveTo(bb3x[0], bbTop);
		      ctx.lineTo(bb3x[1], bbTop);
		      ctx.lineTo(bb3x[2], bbCenter);
		      ctx.lineTo(bb3x[3], bbBottom);
		      ctx.lineTo(bb3x[4], bbBottom);
		      ctx.lineTo(bb3x[5], bbCenter);
		      ctx.lineTo(bb3x[6], bbTop);
		      ctx.closePath();
		      ctx.fillStyle = "rgb(255, 255, 255)";
		      ctx.fill();
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

		      // bonusBanner3 Text
		      ctx.save();
		      ctx.fillText("Seriously. When was the last time you pulled something 30 times the length of your body?", bb3x[9], bbBaseline);

		      // bonusBanner3 String
		      ctx.beginPath();
		      ctx.moveTo(bb3x[7], bbCenter);
		      ctx.lineTo(bb3x[8], bbCenter);
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

			  //draw fry
			  drawCharacter(fry, bb3x[10], bbFry, fw, fh);

			//move banner 3 by incrementing all values in the x position array
			$.each( bb3x, function( i, currentPoint ) {
				currentPoint += (flakeIncrement / 3);
				bb3x[i] = currentPoint;
			});
		//end bonus banner 3
		} else if (bb3x[0] >= WIDTH && typeof banner3DoneFrame === 'undefined'){
			banner3DoneFrame = frame;
		}
	
		//start bonus banner 4 when ready
		if (frame > (banner3DoneFrame + bannerDelay) && bb4x[0] < WIDTH){
			// bonusBanner4 Background
		      ctx.save();
		      ctx.beginPath();
		      ctx.moveTo(bb4x[0], bbTop);
		      ctx.lineTo(bb4x[1], bbTop);
		      ctx.lineTo(bb4x[2], bbCenter);
		      ctx.lineTo(bb4x[3], bbBottom);
		      ctx.lineTo(bb4x[4], bbBottom);
		      ctx.lineTo(bb4x[5], bbCenter);
		      ctx.lineTo(bb4x[6], bbTop);
		      ctx.closePath();
		      ctx.fillStyle = "rgb(255, 255, 255)";
		      ctx.fill();
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

		      // bonusBanner4 Text
		      ctx.save();
		      ctx.fillText("<3", bb4x[9], bbBaseline);

		      // bonusBanner4 String
		      ctx.beginPath();
		      ctx.moveTo(bb4x[7], bbCenter);
		      ctx.lineTo(bb4x[8], bbCenter);
		      ctx.lineJoin = "miter";
		      ctx.miterLimit = 4.0;
		      ctx.stroke();
		      ctx.restore();

			  //draw fry
			  drawCharacter(fry, bb4x[10], bbFry, fw, fh);

			//move banner 4 by incrementing all values in the x position array
			$.each( bb4x, function( i, currentPoint ) {
				currentPoint += (flakeIncrement / 3);
				bb4x[i] = currentPoint;
			});
		//end bonus banner 4
		} else if (bb4x[0] >= WIDTH && typeof banner4DoneFrame === 'undefined'){
			banner4DoneFrame = frame;
		}
		
		//create a new mikeflake
		if (getRandomInt(1, flakeFrequency) == 1){ 
			mikeflakew = getRandomInt(50, mw);
			mikeflakeh = (mikeflakew * mh / mw);
			mikeflakex = getRandomInt(0 - (mikeflakew/2), WIDTH - (mikeflakew/2));
			mikeflakeIncrement = flakeIncrement * (mikeflakew / mw);
			mikeflakes.push({
				thisx: mikeflakex,
				thisy: my0,
				thisw: mikeflakew,
				thish: mikeflakeh,
				thisIncrement: mikeflakeIncrement				
			});
		}
		
		//move all mikeflakes
		$.each(mikeflakes, function (index, value){
			if (value.thisy <= HEIGHT){
				drawCharacter(mikeflake, value.thisx, value.thisy, value.thisw, value.thish);
				value.thisy += value.thisIncrement;
			} 
			else {
				//remove the mikeflake from the array if it is off screen
				mikeflakes.splice(index, 1);
				return false;
			}
		});
		
		//create a new random emflake
		if (getRandomInt(1,flakeFrequency) == 1){
			emflakew = getRandomInt(50, ew);
			emflakeh = (emflakew * eh / ew);
			emflakex = getRandomInt(0 - (emflakew/2), WIDTH - (emflakew/2));
			emflakeIncrement = flakeIncrement * (emflakew / ew);
			emflakes.push({
				thisx: emflakex,
				thisy: ey0,
				thisw: emflakew,
				thish: emflakeh,	
				thisIncrement: emflakeIncrement		
			});
		}
		
		//move all emflakes
		$.each(emflakes, function (index, value){
			if (value.thisy <= HEIGHT){
				drawCharacter(emflake, value.thisx, value.thisy, value.thisw, value.thish);
				value.thisy += value.thisIncrement;
			} 
			else {
				//remove the emflake from the array if it is off screen
				emflakes.splice(index, 1);
				return false;
			}
		});
		
		/* Drawing snow builds */
		if (frame > firstSnowBuildFrame && snow2alpha < 1) {
			//draw snow 1
			drawSnow1(snow1alpha);
			if (snow1alpha < 1) snow1alpha += snowFadeInRate;
		}

		if (snow1alpha >= 1 && snow3alpha < 1){
			//draw snow 2
			drawSnow2(snow2alpha);
			if (snow2alpha < 1) snow2alpha += snowFadeInRate;
		}

		if (snow2alpha >= 1){
			//draw snow 3
			drawSnow3(snow3alpha);
			if (snow3alpha < 1) snow3alpha += snowFadeInRate;
			
			//set the frame for when the snow build completes
			else if (snow3alpha >=1 && typeof lastSnowBuildFrame === 'undefined') {
				lastSnowBuildFrame = frame;
			}
		}
		
		
		//draw kepler 1
		if (frame >= (lastSnowBuildFrame + framesBetweenSnowBuildAndKepler) ){
			if (k1done == false){
				ctx.save();
				ctx.globalAlpha = k1alpha;
				drawCharacter(kepler1, k1x, k1y, k1w, k1h);
				ctx.restore();
				
				//console.log(k1alpha);
			
				if (k1peaked == false && k1alpha < 1) k1alpha += keplerFadeRate;
				else if (k1peaked == false && k1alpha >= 1) k1peaked = true;
				if (k1peaked == true && typeof k1peakedFrame === 'undefined') k1peakedFrame = frame;
				if (frame >= (k1peakedFrame + keplerPauseFrames ) ) k1alpha -= keplerFadeRate;
				if (k1peaked == true && k1alpha <= 0){ k1done = true; k1doneFrame = frame; }
			}
		}
		//draw kepler 2
		if (frame >= (k1peakedFrame + keplerPauseFrames) ){
			if (k2done == false){
				ctx.save();
				ctx.globalAlpha = k2alpha;
				drawCharacter(kepler2, k2x, k2y, k2w, k2h);
				ctx.restore();
				
				//console.log(k2alpha);
			
				if (k2peaked == false && k2alpha < 1) k2alpha += keplerFadeRate;
				else if (k2peaked == false && k2alpha >= 1) k2peaked = true;
				if (k2peaked == true && typeof k2peakedFrame === 'undefined') k2peakedFrame = frame;
				if (frame >= (k2peakedFrame + keplerPauseFrames ) ) k2alpha -= keplerFadeRate;
				if (k2peaked == true && k2alpha <= 0){ k2done = true; k2doneFrame = frame; }
			}
		}
		//draw kepler 3
		if (frame >= (k2peakedFrame + keplerPauseFrames) ){
			if (k3done == false){
				ctx.save();
				ctx.globalAlpha = k3alpha;
				drawCharacter(kepler3, k3x, k3y, k3w, k3h);
				ctx.restore();
				
				//console.log(k3alpha);
			
				if (k3peaked == false && k3alpha < 1) k3alpha += keplerFadeRate;
				else if (k3peaked == false && k3alpha >= 1) k3peaked = true;
				if (k3peaked == true && typeof k3peakedFrame === 'undefined') k3peakedFrame = frame;
				if (frame >= (k3peakedFrame + keplerPauseFrames ) ) k3alpha -= keplerFadeRate;
				if (k3peaked == true && k3alpha <= 0){ k3done = true; k3doneFrame = frame; }
			}
		}
		//draw kepler 4
		if (frame >= (k3peakedFrame + keplerPauseFrames) ){
			if (k4done == false){
				ctx.save();
				ctx.globalAlpha = k4alpha;
				drawCharacter(kepler4, k4x, k4y, k4w, k4h);
				ctx.restore();
				
				//console.log(k4alpha);
			
				if (k4peaked == false && k4alpha < 1) k4alpha += keplerFadeRate;
				else if (k4peaked == false && k4alpha >= 1) k4peaked = true;
				if (k4peaked == true && typeof k4peakedFrame === 'undefined') k4peakedFrame = frame;
				if (frame >= (k4peakedFrame + keplerPauseFrames ) ) k4alpha -= keplerFadeRate;
				if (k4peaked == true && k4alpha <= 0){ k4done = true; k4doneFrame = frame; }
			}
		}
		//draw kepler 5
		if (frame >= (k4peakedFrame + keplerPauseFrames) ){
			if (k5done == false){
				ctx.save();
				ctx.globalAlpha = k5alpha;
				drawCharacter(kepler5, k5x, k5y, k5w, k5h);
				ctx.restore();
				
				//console.log(k5alpha);
			
				if (k5peaked == false && k5alpha < 1) k5alpha += keplerFadeRate;
				else if (k5peaked == false && k5alpha >= 1) k5peaked = true;
				if (k5peaked == true && typeof k5peakedFrame === 'undefined'){ k5peakedFrame = frame; }
			}
		}
		
	} //end draw
	
	function drawCharacter(name, x, y, w, h){
		ctx.drawImage(name, x, y, w, h);
	}
	
	function clear() {
	  ctx.clearRect(0, 0, WIDTH, HEIGHT);
	}
	
	function getRandomInt (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function drawRect(){
		/* draw a rectangle just for debugging purposes */
		ctx.fillRect(100, 100, 10, 10);
	}
	
	function drawSnow1(snow1alpha){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(37.1, 760.9);
		ctx.bezierCurveTo(104.4, 760.9, 119.7, 710.9, 186.0, 762.0);
		ctx.bezierCurveTo(243.8, 712.9, 298.0, 760.9, 318.7, 762.0);
		ctx.bezierCurveTo(339.3, 763.0, 414.0, 732.6, 435.0, 732.6);
		ctx.bezierCurveTo(477.3, 732.6, 496.8, 760.2, 526.3, 760.9);
		ctx.bezierCurveTo(577.3, 762.0, 731.6, 757.6, 770.8, 757.6);
		ctx.bezierCurveTo(826.3, 757.6, 970.8, 709.8, 1018.7, 679.3);
		ctx.bezierCurveTo(1048.0, 660.7, 1063.2, 718.5, 1063.2, 718.5);
		ctx.lineTo(1006.7, 829.3);
		ctx.lineTo(33.9, 843.5);
		ctx.lineTo(37.1, 810.9);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, "+snow1alpha +")";
		ctx.fill();
		ctx.restore();
	}
	
	function drawSnow2(snow2alpha){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(14.4, 747.0);
		ctx.bezierCurveTo(90.4, 749.0, 97.1, 726.6, 190.5, 727.1);
		ctx.bezierCurveTo(225.0, 727.2, 264.0, 740.6, 318.4, 739.0);
		ctx.bezierCurveTo(354.6, 738.0, 416.4, 681.0, 480.4, 687.0);
		ctx.bezierCurveTo(544.4, 693.0, 568.4, 709.0, 636.4, 717.0);
		ctx.bezierCurveTo(704.4, 725.0, 730.4, 753.0, 798.4, 749.0);
		ctx.bezierCurveTo(866.4, 745.0, 928.4, 677.0, 972.4, 681.0);
		ctx.bezierCurveTo(1016.4, 685.0, 1042.4, 693.0, 1042.4, 693.0);
		ctx.lineTo(1036.4, 813.0);
		ctx.lineTo(0, 811.0);
		ctx.lineTo(0, 747.0);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, "+snow2alpha +")";
		ctx.fill();
		ctx.restore();
	}
	
	function drawSnow3(snow3alpha){
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(3.0, 695.6);
		ctx.bezierCurveTo(34.5, 700.1, 108.0, 694.1, 160.5, 695.6);
		ctx.bezierCurveTo(202.5, 696.8, 244.5, 702.4, 309.0, 700.1);
		ctx.bezierCurveTo(351.0, 698.6, 408.0, 665.6, 460.5, 665.6);
		ctx.bezierCurveTo(513.0, 665.6, 600.0, 679.1, 631.5, 680.6);
		ctx.bezierCurveTo(663.0, 682.1, 691.5, 688.1, 744.0, 683.6);
		ctx.bezierCurveTo(796.5, 679.1, 824.9, 657.7, 882.0, 656.6);
		ctx.bezierCurveTo(958.5, 655.1, 1027.4, 667.1, 1046.9, 664.1);
		ctx.lineTo(1040.9, 812.6);
		ctx.lineTo(0.0, 815.6);
		ctx.lineTo(0.0, 695.6);
		ctx.closePath();
		ctx.fillStyle = "rgba(255, 255, 255, "+snow3alpha +")";
		ctx.fill();
		ctx.restore();
	}
	
	init(); 
	
	$('button#play').on('click', startDrawing );
	$('button#mute').on('click', toggleMute );
//end document ready	
});