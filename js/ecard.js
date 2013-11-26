$( document ).ready(function() {
	function init(){
		var c_canvas = document.getElementById('#card');
	 	var c_context = c_canvas.getContext('2d');
		draw();
	}
	
	function draw(){
		var emflake = new Image();
		emflake.src = 'img/emflake.png';
		emflake.onload = function(){
			c_context.drawImage(emflake, 100, 100);
		}
	}
	window.onLoad=function() { init(); };
});