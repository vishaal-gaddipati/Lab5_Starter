// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // let voiceDropdown = document.getElementById("voice-select");

  // voiceDropdown.addEventListener("load", (event) => {
    
  // });
  let voices = [];
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    //const voices = speechSynthesis.getVoices();
    voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  const button = document.querySelector("button");

  const voiceSelect = document.getElementById("voice-select");
  const image = document.querySelector("img");
  
  button.addEventListener('click', (event) => {
    let currText = document.getElementById("text-to-speak").value;
    let utterance = new SpeechSynthesisUtterance(currText);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    utterance.onstart = function() {
      image.src = "assets/images/smiling-open.png";
      image.alt = "Smiling mouth open face";
    };

    utterance.onend = function() {
      image.src = "assets/images/smiling.png";
      image.alt = "Smiling mouth closed face";
    };

    speechSynthesis.speak(utterance);
  });
}