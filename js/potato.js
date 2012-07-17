$(document).ready(function(){

	$('.submit').click(function(){
		update();
	});
	$('.controlstoggle').click(function(){

		if ($('.controls').is(':visible'))
			$('.controls').fadeOut('fast');
		else
			$('.controls').fadeIn('fast');

	});

	$('.controlsrefresh').click(function(){
		update();
	});

	$('.test').click(function(){
		$('.shades').animate({
			height: 'toggle'
		}, 800);
		//alert('lol');

	});

	update();

});

function update(){
	var obj = $('#controlsform').hashForm();

	$('.marqueetext').text("I like " + obj['interest']);


};