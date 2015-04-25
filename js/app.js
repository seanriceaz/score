$(function(){
  //launch full screen needs to happen within an event handler (like a button tap).
  $('#launch').on('tap',function(e){
    e.preventDefault();
    launchIntoFullscreen(document.documentElement); // Launch full screen (Thanks http://davidwalsh.name/fullscreen)
    $("#instructions").addClass('hidden');
  });
	resetGame();
	$('#team1, #team2').on('swiperight.inc swipeup.inc',function(e){
    //If we're flipped, do the opposite
    if($(this).is("#team1")&&$('body').is('.updown')){
      reduceScore(e);
    } else {
      incrementScore(e);
    }
    
  });
  $('#team1, #team2').on('swipeleft.red swipedown.red',function(e){
    //If we're flipped, do the opposite
    if($(this).is("#team1")&&$('body').is('.updown')){
      incrementScore(e);
    } else {
      reduceScore(e);
    }
  });
	$('#restart').on('tap',resetGame);
  //flip orientation for 2player game
  $('#updown').on('tap',function(e){
    if($(this).is('.ion-arrow-swap')){
      $(this).removeClass('ion-arrow-swap').addClass('ion-arrow-down-a');
      $('body').addClass('updown');

    } else { 
      $(this).addClass('ion-arrow-swap').removeClass('ion-arrow-down-a');
      $('body').removeClass('updown');
    }
  });;
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

//Full screen API
// Find the right method, call on correct element (Thanks http://davidwalsh.name/fullscreen)
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
