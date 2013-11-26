$( document ).ready(function() {
	var x = 100;
	var y = -141;
	var dx = 0;
	var dy = 2;
	var w = 306;
	var h = 299;
	var ctx;
	var WIDTH;
	var HEIGHT;
	var intervalId = 0;
	var emflake = new Image();
	emflake.src = 'img/emflake.png';
	
	function init(){
		//set context
		ctx = $("canvas#card")[0].getContext('2d');
		
		WIDTH = $("canvas#card").width()
		HEIGHT = $("canvas#card").height()
		
		intervalId = setInterval(draw, 10);
	}
	
	function draw(){
		clear();
		drawEmflake(x, y, w, h);
		
		dx = getRandomInt(-1,1);
		
		x += dx;
		y += dy;
	}
	
	function drawEmflake(x, y, w, h){
		ctx.drawImage(emflake, x, y, w, h);
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