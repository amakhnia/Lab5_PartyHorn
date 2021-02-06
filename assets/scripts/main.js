// main.js

// TODO
let formPartyHorn = document.getElementById('party-horn-form');

document.getElementById('honk-btn').addEventListener("click", function(v){
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
document.getElementById('radio-air-horn').addEventListener("change", updateAirHorn);
document.getElementById('radio-car-horn').addEventListener("change", updateCarHorn);
document.getElementById('radio-party-horn').addEventListener("change", updatePartyHorn);

function updateAirHorn(){
    document.getElementById('horn-sound').src = "./assets/media/audio/air-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/air-horn.svg";
}

//updates horn sound and image

function updateCarHorn(){
    document.getElementById('horn-sound').src = "./assets/media/audio/car-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/car.svg";
}

//updates horn sound and image

function updatePartyHorn(){
    document.getElementById('horn-sound').src = "./assets/media/audio/party-horn.mp3";
    document.getElementById('sound-image').src = "./assets/media/images/party-horn.svg";
}


