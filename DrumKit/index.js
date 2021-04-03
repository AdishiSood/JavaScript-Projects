var numberOfButtons = document.querySelectorAll(".drum").length;

for(i=0; i < numberOfButtons; i++)

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

            var buttonInnerHtml = this.innerHTML;

            makeSound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        }
    );

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;

        case "f":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;

        case "g":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;

        case "h":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;

        default: console.log(buttonInnerHtml);

    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },50)
}
