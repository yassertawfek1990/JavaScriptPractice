
var buttons = document.querySelectorAll('.drum');


for (var i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener("click", function() {
        makeSound(this.innerHTML)
        ButtonAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function(event) {
     makeSound(event.key)
     ButtonAnimation(event.key)
    })

function makeSound(key) {
    switch (key){
        case 'w':
            var audiow = new Audio('sounds/crash.mp3')
            audiow.play()
            break;
        case 'a':
            var audioa = new Audio('sounds/kick-bass.mp3')
            audioa.play()
            break;
        case 's':
            var audios = new Audio('sounds/snare.mp3')
            audios.play()
            break;
        case 'd':
            var audiod = new Audio('sounds/tom-1.mp3')
            audiod.play()
            break;
        case 'j':
            var audioj = new Audio('sounds/tom-2.mp3')
            audioj.play()
            break;

        case 'k':
            var audiok = new Audio('sounds/tom-3.mp3')
            audiok.play()
            break;

        case 'l':
            var audiol = new Audio('sounds/tom-4.mp3')
            audiol.play()
            break;

        default:
            console.log(this.innerHTML)
}}


function ButtonAnimation(key){
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function(){ document.querySelector("."+key).classList.remove("pressed")},120)// will remove the shadow after 120 milliseconds
}