$( document ).ready(function() {
	var ctx;
	var WIDTH;
	var HEIGHT;
	var intervalId = 0;
	var frame = 0;
	
	var emflakes = [];
	var emflake = new Image();
	emflake.src = 'img/emflake.png';
	var ex = ex0 = 100;
	var ey = ey0 = -299;
	var ew;
	var eh;
	//set natural width and natural height once the image is loaded
	emflake.addEventListener('load', function(){
		ew = emflake.naturalWidth;
		eh = emflake.naturalHeight;
	}, false);
	
	var mikeflakes = [];
	var mikeflake = new Image();
	mikeflake.src = 'img/mikeflake.png';
	var mx = mx0 = 300;
	var my = my0 = -641;
	var mw;
	var mh;
	//set natural width and natural height once the image is loaded
	mikeflake.addEventListener('load', function(){
		mw = mikeflake.naturalWidth;
		mh = mikeflake.naturalHeight;
	}, false);
	
	var lightning = new Image();
	lightning.src = 'img/lightning.png';
	var lx = lx0 = -500;
	var ly = ly0 = 100;
	var dlx = 2;
	var dly = 0;
	var lw;
	var lh;
	//set natural width and natural height once the image is loaded
	lightning.addEventListener('load', function(){
		lw = lightning.naturalWidth;
		lh = lightning.naturalHeight;
	}, false);
	
	var fry = new Image();
	fry.src = 'img/fry.png';
	var fx = fx0 = -900;
	var fy = fy0 = 200;
	var dfx = 2;
	var dfy = 0;
	var fw;
	var fh;
	//set natural width and natural height once the image is loaded
	fry.addEventListener('load', function(){
		fw = fry.naturalWidth;
		fh = fry.naturalHeight;
	}, false);
	
	var firstSnowBuildFrame = 20;
	var snowFadeInRate = .002;
	var snow1alpha = snow2alpha = snow3alpha = 0;
	
	var flakeFrequency = 300; //higher number = fewer flakes
	
	var flakeIncrement = 4; //base speed at which flakes fall
	
	function init(){
		//set context
		ctx = $("canvas#card")[0].getContext('2d');
		
		WIDTH = $("canvas#card").width()
		HEIGHT = $("canvas#card").height()
		
		intervalId = setInterval(draw, 10);
	}
	
	function draw(){
		frame ++;
		clear();
		
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
		}
		
		//only when snow build is done, draw the lightning
		if (snow3alpha >= 1){
		
			drawCharacter(lightning, lx, ly, lw, lh);
			dly = getRandomInt(-1, 1);
			lx += dlx;
			ly += dly;
			if (lx > WIDTH) lx = lx0;
		
			drawCharacter(fry, fx, fy, fw, fh);
			dfy = getRandomInt(-1,1);		
			fx += dfx;
			fy += dfy;
			if (fx > WIDTH) fx = fx0;
		}
		
	}
	
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
		ctx.moveTo(37.1, 810.9);
		ctx.bezierCurveTo(104.4, 810.9, 119.7, 760.9, 186.0, 762.0);
		ctx.bezierCurveTo(243.8, 762.9, 298.0, 810.9, 318.7, 812.0);
		ctx.bezierCurveTo(339.3, 813.0, 414.0, 782.6, 435.0, 782.6);
		ctx.bezierCurveTo(477.3, 782.6, 496.8, 810.2, 526.3, 810.9);
		ctx.bezierCurveTo(577.3, 812.0, 731.6, 807.6, 770.8, 807.6);
		ctx.bezierCurveTo(826.3, 807.6, 970.8, 759.8, 1018.7, 729.3);
		ctx.bezierCurveTo(1048.0, 710.7, 1063.2, 768.5, 1063.2, 768.5);
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
	
//end document ready	
});