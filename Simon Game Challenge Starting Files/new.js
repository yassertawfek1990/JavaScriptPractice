var level = 1;
var tasks = [];
var userClicks = [];
var gameStarted = false;

$(document).on("keypress", function() {
    if (!gameStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

function nextSequence() {
    userClicks = [];  // Reset user clicks for the new level

    var colors = ["green", "red", "yellow", "blue"];
    var randomN = Math.floor(Math.random() * 4);
    var randomColor = colors[randomN];
    tasks.push(randomColor);

    var id = "#" + randomColor;
    $(id).addClass("pressed");
    setTimeout(function() {
        $(id).removeClass("pressed");
    }, 200);

    makeSound(randomColor);
}

$(".btn").on("click", function() {
    var clickedColor = this.id;
    userClicks.push(clickedColor);
    makeSound(clickedColor);

    for (var i = 0; i < userClicks.length; i++) {
        if (userClicks[i] !== tasks[i]) {
            var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            resetGame();
            return;
        }
    }

    if (userClicks.length === tasks.length) {
        level++;
        $("h1").text("Level " + level);
        setTimeout(nextSequence, 1000);
    }
});

function resetGame() {
    level = 1;
    tasks = [];
    gameStarted = false;
}

function makeSound(key) {
    var id = "#" + key;
    $(id).addClass("pressed");
    setTimeout(function() {
        $(id).removeClass("pressed");
    }, 100);

    switch (key) {
        case "blue":
            var audioBlue = new Audio('sounds/blue.mp3');
            audioBlue.play();
            break;
        case "green":
            var audioGreen = new Audio('sounds/green.mp3');
            audioGreen.play();
            break;
        case "red":
            var audioRed = new Audio('sounds/red.mp3');
            audioRed.play();
            break;
        case "yellow":
            var audioYellow = new Audio('sounds/yellow.mp3');
            audioYellow.play();
            break;
        default:
            console.log(key);
    }
}
