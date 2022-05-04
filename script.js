window.addEventListener('load', function() {
	var cnv = document.getElementById("logo");
	var ctx = cnv.getContext('2d');
	/*
	var base = ctx.createRadialGradient(182.5, 90.5, 10, 300, 200, 360);

	base.addColorStop(0, "#FFFFFF"); // Color fix?
	base.addColorStop(0.3, "#C2D6D7");
	base.addColorStop(1, "#3E4D4F");*/
	var base = "#FFFFFF";

	var border = ctx.createRadialGradient(182.5, 90.5, 10, 300, 200, 360);

	border.addColorStop(0, "#51677D");
	border.addColorStop(1, "#8CB1E0")

	ctx.beginPath();
	ctx.fillStyle = border;
	ctx.arc(162.5, 137.5, 112.5, 0, Math.PI*2, true)
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = base;
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#14C7DE";
	ctx.arc(162.5, 137.5, 102.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.fillStyle = "#25AFDC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.8, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#2DA3DC";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.5, Math.PI*3.5, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "#3498DB";
	ctx.arc(162.5, 137.5, 102.5, Math.PI*0.2, Math.PI*3.6, true);
	ctx.fill();
	ctx.closePath();


	ctx.beginPath(); 
	ctx.fillStyle = "#CCE8F6";
	ctx.ellipse(165.5, 128.5, 80, 90, 0, Math.PI*2, 0, true);
	ctx.fill();
	ctx.closePath();

	ctx.fillStyle = "#383D71";
	ctx.font = '70px "Nugelo Serif"';
	ctx.fillText('h', 120, 120);
	ctx.fillText('w', 170, 180);

/*
		ctx.beginPath();
	ctx.fillStyle = "#2585C5";
	ctx.arc(162.5, 177.5, 112.5, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();*/

/*
	ctx.beginPath();
	ctx.fillStyle = "#444FAD";
	ctx.bezierCurveTo(10, 10, 30, 30, 20, 20);
	ctx.fill();
	ctx.closePath();*/
})
