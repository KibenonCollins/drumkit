for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    someSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  });

}
document.addEventListener("keypress", function(event) {
  someSound(event.key)
  buttonAnimation(event.key)
});


function someSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tomO = new Audio('sounds/tom-1.mp3');
      tomO.play();
      break;

    case "j":
      var tomTT = new Audio('sounds/tom-2.mp3');
      tomTT.play();
      break;

    case "k":
      var tomT = new Audio('sounds/tom-3.mp3');
      tomT.play();
      break;

    case "l":
      var tomF = new Audio('sounds/tom-4.mp3');
      tomF.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey) {
  var buttonSelect = document.querySelector("." + currentKey);
  buttonSelect.classList.add("pressed");

  setTimeout(function() {
    buttonSelect.classList.remove("pressed");
  }, 100);
}
