$( document ).ready(function() {
	var ctx;
	var WIDTH;
	var HEIGHT;
	var intervalId = 0;
	var emflake = new Image();
	emflake.src = 'img/emflake.png';
	var x = 100;
	var y = -141;
	var dx = 0;
	var dy = 2;
	var w = 306;
	var h = 299;
	
	var mikeflake = new Image();
	mikeflake.src = 'img/mikeflake.png';
	var mx = 300;
	var my = -641;
	var dmx = 0;
	var dmy = 2;
	var mw = 261;
	var mh = 292;
	
	var lightning = new Image();
	lightning.src = 'img/lightning.png';
	var lx = -500;
	var ly = 100;
	var dlx = 2;
	var dly = 0;
	var lw = 414;
	var lh = 173;
	
	
	function init(){
		//set context
		ctx = $("canvas#card")[0].getContext('2d');
		
		WIDTH = $("canvas#card").width()
		HEIGHT = $("canvas#card").height()
		
		intervalId = setInterval(draw, 10);
	}
	
	function draw(){
		clear();
		//drawEmflake(x, y, w, h);
		drawCharacter(emflake, x, y, w, h);
		dx = getRandomInt(-1,1);		
		x += dx;
		y += dy;
		
		drawCharacter(mikeflake, mx, my, mw, mh);
		dmx = getRandomInt(-1,1);		
		mx += dmx;
		my += dmy;
		
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