
var color = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var bool=false;
init();//initialisation of game
userSequence();




//<----------------------GENERATE NEXT SEQUENCE-------------------------------->
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var radnomChosenColor = color[randomNumber];
  gamePattern.push(radnomChosenColor);
  levelInc();
  animatePress(radnomChosenColor);

  playSound(radnomChosenColor);
}

//<---------------------USER GENERATED SEQUENCE--------------------------------->

 function userSequence()
 {
  $(document).on("click", function (e) {
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
    
  });
  

 }

 
  





// $(document).on("click", function (e) {
//   var userChosenColor = e.target.id;
//   userClickedPattern.push(userChosenColor);
//   animatePress(userChosenColor);
//   playSound(userChosenColor);
// });





//--------------------------------------Check------------------------------>
function checkAnswer(currentLvl)
{
  if(gamePattern[currentLvl]===userClickedPattern[currentLvl])
  {
    if(gamePattern.length===userClickedPattern.length)
    {
      setTimeout(nextSequence,1000);
      userClickedPattern=[];
    }
  }
  else 
  {
    
    $("body").addClass("game-over");
    var myAudio=new Audio("sounds/wrong.mp3");
    myAudio.play();
    setTimeout(function()
    {$("body").removeClass("game-over");

    },100);

    $("h1").html("Game Over Press Any key to Restart");
    
    $(document).on('keypress',reset);
    
    
    
  }
}
// function arrayCheck(a,b)
// {
//   if (a === b) return true;
//   if (a.length===0 || b.length===0) return false;
//   if (a.length != b.length) return false;
//   for(var i=0;i<a.length;i++)
//   {
//     if(a[i]!==b[i])
//     return false;
     
//   }
//   return true;
  
// }
// var ans=arrayCheck(gamePattern,userClickedPattern);
// function check()
// {
//   if(arrayCheck(gamePattern,userClickedPattern)===true)
//   { 
//     userClickedPattern=[];
//     setTimeout(nextSequence,1000);
//   }
//   else
//   {
//     $("body").addClass("game-over");
//     setTimeout(function()
//     {$("body").removeClass("game-over");

//     },100);

//     $("h1").html("Game Over Press Any key to Restart");
//   }
 
// }




//<---------------------------ANIMATION AND SOUND------------------------------>
// playSound
function playSound(name) {
  var myAudio = new Audio("sounds/" + name + ".mp3");
  myAudio.play();
}

// animatePress
function animatePress(name) {
  $("#" + name).addClass("pressed");
  setTimeout(function () {
    $("#" + name).removeClass("pressed");
  }, 100);
}


// initFunction
function init()
{
 
 $(document).on('keypress',function(e){
   if(bool===false)
   { 
     nextSequence();
    
     bool=true;
   }
  
 });
  
  // userSequence();
  
  
   

}
 
//<------------------------------------LEVEL INCREASE---------------------------------->

 function levelInc()
 { level++;
   $("h1").html("Level "+level);
  
 }

 function reset()
 {
   level=1;
   $("h1").html("Level 1");
  level=0;
  nextSequence();
  
 }





 
 
