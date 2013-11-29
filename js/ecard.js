$( document ).ready(function() {
	var ctx;
	var WIDTH;
	var HEIGHT;
	var intervalId = 0;
	
	var emflake = new Image();
	emflake.src = 'img/emflake.png';
	var x = x0 = 100;
	var y = y0 = -299;
	var dx = 0;
	var dy = 2;
	var w = 306;
	var h = 299;
	
	var mikeflake = new Image();
	mikeflake.src = 'img/mikeflake.png';
	var mx = mx0 = 300;
	var my = my0 = -641;
	var dmx = 0;
	var dmy = 2;
	var mw = 261;
	var mh = 292;
	
	var lightning = new Image();
	lightning.src = 'img/lightning.png';
	var lx = lx0 = -500;
	var ly = ly0 = 100;
	var dlx = 2;
	var dly = 0;
	var lw = 414;
	var lh = 173;
	
	var fry = new Image();
	fry.src = 'img/fry.png';
	var fx = fx0 = -900;
	var fy = fy0 = 200;
	var dfx = 2;
	var dfy = 0;
	var fw = 364;
	var fh = 116;
	
	
	function init(){
		//set context
		ctx = $("canvas#card")[0].getContext('2d');
		
		WIDTH = $("canvas#card").width()
		HEIGHT = $("canvas#card").height()
		
		intervalId = setInterval(draw, 10);
	}
	
	function draw(){
		clear();
		drawCharacter(emflake, x, y, w, h);
		dx = getRandomInt(-1,1);		
		x += dx;
		y += dy;
		if (y > HEIGHT)	y = y0;
		
		drawCharacter(mikeflake, mx, my, mw, mh);
		dmx = getRandomInt(-1,1);		
		mx += dmx;
		my += dmy;
		if (my > HEIGHT) my = my0;
		
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
	
	init(); 
	
//end document ready	
});