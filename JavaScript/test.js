// var tasks = []
// var randomN = Math.floor(Math.random()*4)
// var colors = ["green","red","yellow","blue"]
// var randomColor = colors[randomN]
// console.log(randomColor)
// tasks.push(randomColor)
// console.log(tasks)
// var id = "#"+randomColor
// $(id).addClass("pressed") 
// setTimeout(function(){$(id).removeClass("pressed")},200)
// var gameOn = false
// var test = 2
// $(".btn").on("click",function(){
//     // if (this.id === tasks[level - 1]){
//     //     makeSound(key)
//     // }
//     if (test === 2){ makeSound(this.id)}
//     else {
//         var wrong = new Audio('sounds/wrong.mp3')
//         wrong.play()}

// }
// )
var level = 1

$(document).on("keypress",function(){
    $("h1").text("Level "+level);
    playing()
    

}
)
function playing(){
    var tasks = []
    var game = "on"
    while (game === "on"){
    var randomN = Math.floor(Math.random()*4)
    var colors = ["green","red","yellow","blue"]
    var randomColor = colors[randomN]
    tasks.push(randomColor)
    var id = "#"+randomColor
    $(id).addClass("pressed") 
    setTimeout(function(){$(id).removeClass("pressed")},200)
    for (var i = 0; i < tasks.length ; i++) {
    $(".btn").on("click",function(){
        if (this.id === tasks[i]){ 
            makeSound(this.id);
            
            
        }
        else {
            var wrong = new Audio('sounds/wrong.mp3')
            wrong.play()
            $("h1").text("Game Over, Press Any Key to Restart");
            game = "off"
        }
    })
}
        level++;
        $("h1").text("Level "+level);
            
    
   
    
}  
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


