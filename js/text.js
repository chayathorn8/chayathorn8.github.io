var textArray = ["S  K  I  L  L"];

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

var times = 0;
function changeText(){
	var getText = textArray[times];

	if(times == textArray.length - 1){
		times = 0;
	}else{
		times++;
	}

	$('.split').text(getText);

	var text = $('.split');
	$(text).lettering();
	textConvert = $('.split').html();
	textConvert = textConvert.replace(/span/g, 'div');
	$('.split').html(textConvert);

	$('.split div').each(function(i){
		$(this).addClass('characters');
		$(this).lettering();
		var width = $(this).find('span').outerWidth(true);
		var height = $(this).find('span').outerHeight(true);
		$(this).css('width', (width != 0 ? width+1 : 10)+'px');
		$(this).css('height', height+'px');

	});

	$('.split div span').each(function(i){
	$(this).addClass('separate');
	TweenMax.from($(this), 2.5, {
		opacity: 0,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		scale: .1,
		delay: i * .02,
		yoyo: true,
		repeat: -1,
		repeatDelay: 5,
	});
});
}
changeText();
setInterval(function(){ changeText(); }, 12000);