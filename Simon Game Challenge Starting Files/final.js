var tasks = []
var userClicks = []
var start = false
var level = 0
$(document).on("keypress",function(){
    if (!start){
        newSequence();
        $("h1").text("Level "+level);
        
        start = true
    }    
}
)
$(".btn").on("click",function(){
    var clickedColor = this.id;
    userClicks.push(clickedColor);
    makeSound(clickedColor);
    checkAns(userClicks.length-1);
    }
    )
 


   
function checkAns(n){
    if(userClicks[n] === tasks[n]){
        if(userClicks.length === tasks.length){
            setTimeout(function(){newSequence()},1000)
            $("h1").text("Level "+level);
        }
        }
        else{
            var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            startAgain()
        }
}  
            
function startAgain() {
    level = 0n;
    tasks = [];
    start = false;

}
   
    


function newSequence(){
    userClicks = []
    level++
    var randomN = Math.floor(Math.random()*4)
    var colors = ["green","red","yellow","blue"]
    var randomColor = colors[randomN]
    tasks.push(randomColor)
    var id = "#"+randomColor
    makeSound(randomColor)
    $(id).addClass("pressed") 
    setTimeout(function(){$(id).removeClass("pressed")},200)
}

function makeSound(key){
    var id = "#"+key
    $(id).addClass("pressed") 
    setTimeout(function(){$(id).removeClass("pressed")},100)
    switch (key) {
        case "blue":
            var audioBlue = new Audio('sounds/blue.mp3')
            audioBlue.play()
            break;
        case "green":
            var audioBlue = new Audio('sounds/green.mp3')
            audioBlue.play()
            break;
        case "red":
            var audioBlue = new Audio('sounds/red.mp3')
            audioBlue.play()
            break;
        case "yellow":
            var audioBlue = new Audio('sounds/yellow.mp3')
            audioBlue.play()
            break;
        default:
            console.log(this.id)
    }
}


