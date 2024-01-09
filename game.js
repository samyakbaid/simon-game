var gameLevel=0
started=false

    $(document).keydown(function(){
if(!started){
    setTimeout(function(){nextSequence()},500) ;
     started=true
     
}
   


})

function nextSequence() 
{
    userClickedPattern=[]; 
    gameLevel++;
    $('h1').text('Level '+ gameLevel);
    var randomNumber=Math.floor((Math.random())*4);
    var randomColours=buttonColours[randomNumber];
gamePattern.push(randomColours);
$('#'+randomColours).fadeOut(100).fadeIn(100);
playSound(randomColours);


} 

var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];



var userClickedPattern=[]
$('.btn').click(function () {
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    $('#'+userChosenColour).fadeOut(100).fadeIn(100);

    levelUp(userClickedPattern.length)
})


function levelUp(level){
    
     if (userClickedPattern[level-1]===gamePattern[level-1]) {
        if (level===gamePattern.length){
            setTimeout(function(){nextSequence()},1000) ;
        }
        
    } else{
    flashRed();
    $('h1').text('Game over, Press any key to start again ! ');
    started=false
    gameLevel=0
    gamePattern=[]
    }

}

function keyPressed(key) {
    $('#'+key).classList.add('pressed')
    setTimeout(function(){
        $('#'+key).classList.remove('pressed'),300
          })
    playSound(key);
}

function flashRed() {
  document.body.classList.add('game-over')
  window.setTimeout(function() {
    document.body.classList.remove('game-over')
  }, 100)
  var end=new Audio('./sounds/wrong.mp3');
                end.play()
}

function playSound(key) {
    switch (key) {
        case 'red':
            var red=new Audio('./sounds/red.mp3');
            red.play()
            break;
        case 'blue':
                var blue=new Audio('./sounds/blue.mp3');
                blue.play()
                break;
        case 'green':
                var green=new Audio('./sounds/green.mp3');
                green.play()
                break;
        case 'yellow':
                var yellow=new Audio('./sounds/yellow.mp3');
                yellow.play()
                break;
        
        default:
            var wrong= new Audio('./sounds/wrong.mp3')
            wrong.play()
            break;
    }
    
}


