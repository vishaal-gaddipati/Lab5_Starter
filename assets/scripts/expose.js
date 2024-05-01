// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  //let airHorn = selectElement.options[0];
  //const hornImage = document.querySelector("img");
  const images = document.querySelectorAll("img");
  const hornImage = images[0];
  const audioImage = images[1];
  const audioSound = document.querySelector("audio");
  const audioSlider = document.getElementById("volume");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  selectElement.addEventListener("change", (event) => {
    //image.src = "assets/images/air-horn.svg";
    hornImage.src = `assets/images/${event.target.value}.svg`;
    hornImage.alt = event.target.value + " selected";
    audioSound.src = "assets/audio/" + event.target.value + ".mp3";
  });

  audioSlider.addEventListener("input", (event) => {
    if (audioSlider.value == 0) {
      audioImage.src = "assets/icons/volume-level-0.svg";
      audioImage.alt = "Volume level 0";
    }
    if (audioSlider.value >= 1 && audioSlider.value < 33) {
      audioImage.src = "assets/icons/volume-level-1.svg";
      audioImage.alt = "Volume level 1";
    }
    if (audioSlider.value >= 33 && audioSlider.value < 67) {
      audioImage.src = "assets/icons/volume-level-2.svg";
      audioImage.alt = "Volume level 2";
    }
    if (audioSlider.value >= 67) {
      audioImage.src = "assets/icons/volume-level-3.svg";
      audioImage.alt = "Volume level 3";
    }
    audioSound.volume = audioSlider.value / 100;
  });

  playButton.addEventListener("click", (event) => {
    audioSound.play();
    // const jsConfetti = new JSConfetti()

    // jsConfetti.addConfetti()
    //alert(selectElement.options[selectElement.selectedIndex].value);
    if (selectElement.options[selectElement.selectedIndex].value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}