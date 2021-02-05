// main.js

// TODO

function updateVolumeSlider(){
    let volumeSlider = document.getElementById("volume-slider");
    let volumeNumber = document.getElementById("volume-number");
    let audioValue = document.getElementById("horn-sound");
    volumeSlider.addEventListener("input", updateVolumeNumber);
    volumeSlider.value = volumeNumber.value;
    updateVolumeImage();
    audioValue.volume = volumeSlider.value / 100;
}

function updateVolumeNumber(){
    volumeSlider.addEventListener("input", updateVolumeNumber);
    volumeNumber.value = volumeSlider.value;
    updateVolumeImage();
    audioValue.volume = volumeNumber.value / 100;
}

function updateVolumeImage() {
    let volumeImage = document.getElementById("volume-image");
    let honkButton = document.getElementById("honk-button");
    //volume-level-3: 67-100
    if (volumeNumber.value >= 67){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
    }
    //volume-level-2: 34-66
    else if (volumeNumber.value >= 34 && volumeNumber.value <= 66){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
    }
    //volume-level-1: 1-33
    else if (volumeNumber.value >= 1 && volumeNumber.value <= 33){
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
    }
    //volume-level-0: 0
    else if (volumeNumber.value == 0){
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
    }

}

function updateAirHorn(){
    let radioAirHorn = document.getElementById("air-horn");
    let soundImage = document.getElementById("sound-image");
    radioAirHorn.addEventListener("change", updateAirHorn);
    soundImage.scr = "./assets/media/images/air-horn.svg";
    audioValue.scr = "./assets/media/audio/air-horn.mp3";
}

function updateCarHorn(){
    let radioCarHorn = document.getElementById("car-horn");
    radioCarHorn.addEventListener("change", updateCarHorn);
    soundImage.scr = "./assets/media/images/car-horn.svg";
    audioValue.scr = "./assets/media/audio/car-horn.mp3";
}

function updatePartyHorn(){
    let radioPartyHorn = document.getElementById("party-horn");
    radioPartyHorn.addEventListener("change", updatePartyHorn);
    soundImage.scr = "./assets/media/images/party-horn.svg";
    audioValue.scr = "./assets/media/audio/party-horn.mp3";
}

function updatePlayMedia(v){
    let formPartyHorn = document.getElementById("party-horn-form");
    v.preventDefault();
    audioValue.play();
}
