// main.js

// TODO
/*
let audioValue = document.getElementById('horn-sound');
let radioAirHorn = document.getElementById('radio-air-horn');
let radioPartyHorn = document.getElementById('radio-party-horn');

let volumeImage = document.getElementById('volume-image');
let honkButton = document.getElementById('honk-btn');

let soundImage = document.getElementById('sound-image');
let radioCarHorn = document.getElementById('radio-car-horn');
let radioPartyHorn = document.getElementById('radio-party-horn');
let formPartyHorn = document.getElementById('party-horn-form');
*/

honkButton.addEventListener("click", function(v){
    v.preventDefault();
    document.getElementById('horn-sound').play();
});

document.getElementById('volume-slider').addEventListener("input", updateVolumeNumber);
function updateVolumeSlider(){
    document.getElementById('volume-slider').value = document.getElementById('volume-number').value;
    updateVolumeImage();
    document.getElementById('horn-sound').volume = document.getElementById('volume-slider').value / 100;
}

document.getElementById('volume-number').addEventListener("input", updateVolumeSlider);
function updateVolumeNumber(){
    document.getElementById('volume-number').value = document.getElementById('volume-slider').value;
    updateVolumeImage();
    document.getElementById('horn-sound').volume = document.getElementById('volume-number').value / 100;
}

function updateVolumeImage() {

    //volume-level-3: 67-100
    if (document.getElementById('volume-number').value >= 67){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById('honk-btn').disabled = false;
    }
    //volume-level-2: 34-66
    else if (document.getElementById('volume-number').value >= 34 && document.getElementById('volume-number').value <= 66){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById('honk-btn').disabled = false;
    }
    //volume-level-1: 1-33
    else if (document.getElementById('volume-number').value >= 1 && document.getElementById('volume-number').value <= 33){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById('honk-btn').disabled = false;
    }
    //volume-level-0: 0
    else if (document.getElementById('volume-number').value == 0){
        document.getElementById('volume-image').src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById('honk-btn').disabled = true;
    }

}
//updates horn sound and image
document.getElementById('radio-air-horn').addEventListener("click", updateAirHorn);
function updateAirHorn(){
    document.getElementById('sound-image').scr = "./assets/media/images/air-horn.svg";
    document.getElementById('horn-sound').scr = "./assets/media/audio/air-horn.mp3";
}
//updates horn sound and image
document.getElementById('radio-car-horn').addEventListener("click", updateCarHorn);
function updateCarHorn(){
    document.getElementById('sound-image').scr = "./assets/media/images/car.svg";
    document.getElementById('horn-sound').scr = "./assets/media/audio/car-horn.mp3";
}
//updates horn sound and image
document.getElementById('radio-party-horn').addEventListener("click", updatePartyHorn);
function updatePartyHorn(){
    document.getElementById('sound-image').scr = "./assets/media/images/party-horn.svg";
    document.getElementById('horn-sound').scr = "./assets/media/audio/party-horn.mp3";
}


