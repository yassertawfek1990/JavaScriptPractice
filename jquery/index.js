$(document).ready(function(){ // we use this to make sure the jquerry is loaded properly before js file

    $("h1").css("color","purple")
})

var color = $("h1").css("color") 
var buttons = $("button") // will select all buttons like queryselectall
$("h1").addClass("fontFamily")
console.log($("h1").hasClass("fontFamily"))// returns True or False
$("h1").addClass("fontShadow fontSize") // we can add two classes at the same time
$("h1").removeClass("fontFamily")
$("h2").text("Bye") // changes all h2 elemnts
$("h3").html("<em>ALLAH</em>")
console.log($("h4").attr("class"))// gets the attribute value
$("a").attr("href","https://www.youtube.com/")// changes the value of an attribute

$("h5").click(function(){
    $("h5").css("color","green")
})
$("button").click(function(){ // will apply it to all buttons
    $("h4").css("color","green")
})
$(document).keypress(function(event){
    $("h4").text(event.key)
})

$("h3").on("click",function(){
    $("h3").css("color","purple")
})
$("h2").on("mouseover",function(){
    $("h2").css("color","blue")
})
$("h6").on("click",function(){
    $("h6").css("color","purple")
})
$(document).on("keypress",function(event){
    $("h5").text(event.key)
})
$("h1").before("<button>before</button>")// add before the tag
$("h1").after("<button>after</button>")// add afterr the tag
$("h1").append("<button>append</button>")// add inside the tag after the content
$("h1").prepend("<button>prepend</button>")// add inside the tag before the content
$("h7").remove()
$("button").on("click",function(){
    $("a").hide();
})
$("button").on("click",function(){
    $("a").show();
})
$("button").on("click",function(){
    $("h3").toggle();
})
$("button").on("click",function(){
    $("h4").fadeOut();//fadeIn
})
$("button").on("click",function(){
    $("h5").fadeToggle();
})
$("button").on("click",function(){
    $("h6").slideUp();//slideDown
})
$("button").on("click",function(){
    $("h2").slideToggle();
})

$("button").on("click",function(){
    $("h1").animate({opacity:.5 });
})
$("button").on("click",function(){
    $("h1").animate({margin:"20%" });
})

$("button").on("click",function(){
    $("h2").slideUp().slideDown().animate({margin:"20%", opacity:.5});
})
