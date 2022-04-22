window.addEventListener('load', function() {
	var cnv = document.getElementById("logo");
	var ctx = cnv.getContext('2d');

	ctx.beginPath();
	ctx.fillStyle = "#AFF6ED";
	ctx.arc(100, 100, 80, 0, Math.PI*2, true);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.strokeStyle = "#6AA0AA"
	ctx.arc(100, 100, 80, 0, Math.PI*2, true);
	ctx.lineWidth = "10";
	ctx.stroke();
	ctx.closePath();

	ctx.fillStyle = "#444FAD";
	ctx.font = '30px "Albertus MT"';
	ctx.fillText('H', 90, 90); // PLACEHOLDER VALUES
	ctx.fillText('W', 110, 110);
})