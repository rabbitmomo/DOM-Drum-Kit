//1. selected all drum class elements.
//2. add eventlistener to them by using loops
//3. play click() function
//4. add audio file then play for each audio inside for loop

var numberOfButton = document.querySelectorAll(".drum").length;
var sounds = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/crash.mp3","sounds/snare.mp3","sounds/kick-bass.mp3"]
var innerButtonHTML = ["w","a","s","d","j","k","l"]

for(var i=0;i<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        for(var j = 0;j<numberOfButton;j++){
            if(this.innerHTML==innerButtonHTML[j]){

            keyPressed(this.innerHTML);//pressed animation

            var audio = new Audio(sounds[j]);
            audio.play();} //play the sound
        }

    });
}

document.addEventListener("keypress",function(event){

    const a = event.key.toLowerCase();
    keyPressed(a);
    var index = innerButtonHTML.indexOf(a);
    var audio = new Audio(sounds[index]);
    audio.play();

})

function keyPressed(keypressing){
    var b = innerButtonHTML.indexOf(keypressing.toLowerCase());
    if(b!=-1) {
        
        document.querySelectorAll(".drum")[b].classList.add("pressed");

        setTimeout(function(){
            document.querySelectorAll(".drum")[b].classList.remove("pressed")
        },100)

    }
}


