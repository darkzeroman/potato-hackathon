$(document).ready(function(){

	$('.submit').click(function(){
		reseteverything();
		setTimeout(function(){
			update();
		}, 1000);
	});
	$('.controlstoggle').click(function(){

		if ($('.controls').is(':visible'))
			$('.controls').fadeOut('fast');
		else
			$('.controls').fadeIn('fast');

	});

	$('.controlsrefresh').click(function(){
		reseteverything();
		//update();

	});

	$('.test').click(function(){
		update();
		//alert('lol');

	});

//	$('.test').click();

	update();

});

function reseteverything(){

	$('.potato-all').animate({
		bottom: '1000px',
	});
	$('.blinds-retract').animate({
		top: '0px'
	}, 800);
	$('.trophy-curtain').animate({
		top: '133px'
	}, 800);

}

function update(){
	var obj = $('#controlsform').hashForm();

	$('.marqueetext').text("I love " + obj['interest']);

	$('.potato-all').animate({
		bottom: '123px',
	}, 800).effect("bounce", { times: 3, distance: '50px'}, 600);
	$('.blinds-retract').animate({
		top: '-500px'
	}, 800);
	$('.trophy-curtain').animate({
		top: '-500px'
	}, 800);


	var potatoImageURL;

	if (obj['sex'] == "female")
		potatoImageURL = "img/potato_adult-female.png";
	else if (obj['age'] == "0-15")
			potatoImageURL = "img/potato_boy.png";
			//alert(potatoImageURL);
	else 
		potatoImageURL = "img/potato_adult.png";
	

	var numTrophies = obj['activitylevel'];


	numPixels = 53;



	$('.potato-all').css('background-image', 'url(' + potatoImageURL + ')');

	$('.row1').css('width', numPixels*numTrophies).fadeIn();
	$('.row2').css('width', numPixels*numTrophies).fadeIn();


	$('.windowbackground-image').replaceWith("<img src=\"img/"+ obj['location'] +".png\" class=\"windowbackground-image\">");
	



};