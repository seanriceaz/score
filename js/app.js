$(function(){
	resetGame();
	$('#team1, #team2').on('singletap',function(e){
    incrementScore(e);
  });
  $('#team1, #team2').on('swipeleft',function(e){ //could replace this with just swipe
    reduceScore(e);
  });
	$('#restart').on('tap',resetGame);
});

function incrementScore(e){
	$this = ($(e.target).is('label')) ?  $(e.target) :  $(e.target).find('label');
  var score = $this.data('score');
  score++;
  $this.data('score',score).html(score); //TODO: make this faster
  e.preventDefault();
  //e.stopPropagate();
}

function reduceScore(e){
  $this = ($(e.target).is('label')) ?  $(e.target) :  $(e.target).find('label');
  var score = $this.data('score');
  score--;
  $this.data('score',score).html(score); //TODO: make this faster
  e.preventDefault();
  //e.stopPropagate();
}

function resetGame(){
	$('label').data('score',0).html('0');
}