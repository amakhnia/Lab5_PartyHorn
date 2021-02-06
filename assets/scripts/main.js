// main.js

// TODO

let audioValue = document.getElementById('horn-sound');
let volumeImage = document.getElementById('volume-image');
let honkButton = document.getElementById('honk-btn');
let radioAirHorn = document.getElementById('radio-air-horn');
let soundImage = document.getElementById('sound-image');
let radioCarHorn = document.getElementById('radio-car-horn');
let radioPartyHorn = document.getElementById('radio-party-horn');
let formPartyHorn = document.getElementById('party-horn-form');


document.getElementById('volume-number').addEventListener("input", updateVolumeSlider);

radioAirHorn.addEventListener("click", updateAirHorn);
radioCarHorn.addEventListener("click", updateCarHorn);
radioPartyHorn.addEventListener("click", updatePartyHorn);
honkButton.addEventListener("click", function(v){
    v.preventDefault();
    audioValue.play();
});

document.getElementById('volume-slider').addEventListener("input", updateVolumeNumber);
function updateVolumeSlider(){
    volumeSlider.value = volumeNumber.value;
    updateVolumeImage();
    audioValue.volume = volumeSlider.value / 100;
}

document.getElementById('volume-number').addEventListener("input", updateVolumeSlider);
function updateVolumeNumber(){
    volumeNumber.value = volumeSlider.value;
    updateVolumeImage();
    audioValue.volume = volumeNumber.value / 100;
}

function updateVolumeImage() {

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
//updates horn sound and image
function updateAirHorn(){
    soundImage.scr = "./assets/media/images/air-horn.svg";
    audioValue.scr = "./assets/media/audio/air-horn.mp3";
}
//updates horn sound and image
//radioCarHorn.addEventListener("change", updateCarHorn);
function updateCarHorn(){
    soundImage.scr = "./assets/media/images/car.svg";
    audioValue.scr = "./assets/media/audio/car-horn.mp3";
}
//updates horn sound and image
//radioPartyHorn.addEventListener("change", updatePartyHorn);
function updatePartyHorn(){
    soundImage.scr = "./assets/media/images/party-horn.svg";
    audioValue.scr = "./assets/media/audio/party-horn.mp3";
}


