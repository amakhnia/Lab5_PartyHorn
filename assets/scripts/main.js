// main.js

// TODO
let volumeSlider = document.getElementById("volume-slider");
let volumeNumber = document.getElementById("volume-number");
let audioValue = document.getElementById("horn-sound");
let volumeImage = document.getElementById("volume-image");
let honkButton = document.getElementById("honk-button");
let radioAirHorn = document.getElementById("air-horn");
let soundImage = document.getElementById("sound-image");
let radioCarHorn = document.getElementById("car-horn");
let radioPartyHorn = document.getElementById("party-horn");
let formPartyHorn = document.getElementById("party-horn-form");

radioAirHorn.addEventListener("click", updateAirHorn);
radioCarHorn.addEventListener("click", updateCarHorn);
radioPartyHorn.addEventListener("click", updatePartyHorn);
formPartyHorn.addEventListener("click", updatePlayMedia);

volumeSlider.addEventListener("input", updateVolumeNumber);
function updateVolumeSlider(){
    volumeSlider.value = volumeNumber.value;
    updateVolumeImage();
    audioValue.volume = volumeSlider.value / 100;
}

volumeNumber.addEventListener("input", updateVolumeSlider);
function updateVolumeNumber(){
    volumeNumber.value = volumeSlider.value;
    updateVolumeImage();
    audioValue.volume = volumeNumber.value / 100;
}

function updateVolumeImage() {
    //volume-level-3: 67-100
    if (volumeNumber.value >= 67){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        
    }
    //volume-level-2: 34-66
    else if (volumeNumber.value >= 34 && volumeNumber.value <= 66){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        
    }
    //volume-level-1: 1-33
    else if (volumeNumber.value >= 1 && volumeNumber.value <= 33){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        
    }
    //volume-level-0: 0
    else if (volumeNumber.value == 0){
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    }

}


function updateAirHorn(){
    soundImage.scr = "./assets/media/images/air-horn.svg";
    audioValue.scr = "./assets/media/audio/air-horn.mp3";
}

//radioCarHorn.addEventListener("click", updateCarHorn);
function updateCarHorn(){
    soundImage.scr = "./assets/media/images/car.svg";
    audioValue.scr = "./assets/media/audio/car-horn.mp3";
}

//radioPartyHorn.addEventListener("click", updatePartyHorn);
function updatePartyHorn(){
    soundImage.scr = "./assets/media/images/party-horn.svg";
    audioValue.scr = "./assets/media/audio/party-horn.mp3";
}

//formPartyHorn.addEventListener("click", updatePlayMedia);
function updatePlayMedia(v){
    v.preventDefault();
    audioValue.play();
}
