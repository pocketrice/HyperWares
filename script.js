window.addEventListener('load', function() {
	var navElement = document.getElementsByClassName("navElement");
	var navCount = 0;
	var colorPicker = document.getElementById("color-picker");
	var colorPickerDisplay = document.getElementById("color-picker-display");
	var invalidMessage = ["Must be only alphabetic, dashes, or apostrophes", "Must be a valid email address", "This date is unavailable.", "This color is unavailable."]
	var validMessage = ["Valid!", "Valid!", "Date available!", "Color available!"]

	colorPicker.addEventListener("input", function() {
		colorPickerDisplay.innerText = colorPicker.value;
	});


	var validationFields = document.getElementsByClassName("inputNeedsValidation");
	var validationLabel = document.getElementsByClassName("form-validator");

	for (let i = 0; i < validationFields.length; i++)
	{
		validationFields[i].addEventListener('input', function() {
			validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>cached</span>&nbsp;Checking validity...";
			validationLabel[i].setAttribute("class", "form-validator");
			validationLabel[i].classList.add('form-loading');

			setTimeout(function() {
				validationLabel[i].setAttribute("class", "form-validator");

				if (validationFields[i].value.length == 0)
				{
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>cached</span>&nbsp;Checking validity...";
					validationLabel[i].classList.add('form-loading');
				}

				validator: if (validationFields[i].checkValidity() == true)
				{
					console.assert(tinycolor(colorPicker.value).isValid(), "Invalid tinycolor!" + colorPicker.value);

					if (i == 3) // Color picker
					{
						if ((tinycolor(colorPicker.value).getBrightness() > 50) && (tinycolor(colorPicker.value).getBrightness() < 230))
						{
							validationLabel[i].classList.add('form-valid');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
						}
						else
						{
							validationLabel[i].classList.add('form-fail');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
						}
						break validator;
					}

					if (i == 2) // Date picker
					{
						var datePicked = new Date(validationFields[i].value);

						if ((datePicked < Date.now()) || (Math.abs(Date.now() - datePicked) > (30 * 24 * 60 * 60 * 1000)))
						{
							validationLabel[i].classList.add('form-fail');
							validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
						}
						else
						{
						validationLabel[i].classList.add('form-valid');
						validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
						}
						break validator;
					}


					validationLabel[i].classList.add('form-valid');
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>done</span>&nbsp;" + validMessage[i];
				}
				else
				{
					validationLabel[i].classList.add('form-fail');
					validationLabel[i].innerHTML = "<span class='material-symbols-outlined'>error</span>&nbsp;" + invalidMessage[i];
				}
		}, 1500)

				if (validationFields[i].value.length == 0) // If input is empty
				{
					validationLabel[i].style.opacity = 0;
				}
				else
				{
					validationLabel[i].style.opacity = 1;
				}

			})
	}


	$(" #checkoutForm ").reset(function(e) { // ULTRA WIP
		if (validationFields.forEach(element => ((element.classList.contains("form-fail")) ? true : false)) == true)
		{
			alert("Unable to submit: you have one or more invalid fields.")
			e.preventDefault();
		}
		else
		{
			alert("Successfully submitted your order. Thank you for your business!")
			e.preventDefault();
		}
	})

	function reset() {
		colorPickerDisplay.innerText = "------";
	}
	

	Mousetrap.bind('tab', function() { // TODO: hide mouse; when mouse moved/clicked revert 'mouseless mode'.
		navCount++;

		if (navCount > 3)
		{
			navCount = 0;
		}

		navElement[navCount].style.color = "#E0E5EC";

		for (let i = 0; i < navElement.length; i++)
		{
			if (i != navCount)
			{
				navElement[i].style.color = "#96A9A7";
			}
		}
	});

	seamless.polyfill();



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

	colorPickerDisplay.innerText = colorPicker.value;
	console.log("Script loaded. (" + performance.now() + "ms)");
})
