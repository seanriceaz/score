$(function(){
	resetGame();
	$('#team1, #team2').click(function(e){ //TOTO: Integrate faster clicking on mobile... hammer.js?
		var score = $(this).find('label').data('score');
		score++;
		$(this).find('label').data('score',score).html(score); //TODO: make this faster
		e.preventDefault();
		e.stopPropagate();
	});

	$('#restart').click(function(){ //TOTO: Integrate faster clicking on mobile... hammer.js?
		resetGame();
	});

});

function resetGame(){
	$('label').data('score',0).html('0');
}