const fortunes = [
    "You will <strong>die alone</strong>.",
    "You will <strong>combust randomly</strong> at the age of <strong>23</strong>",
    "Noone will marry you because you <strong>smell terrible</strong>.",
    "Error 404: Fortune not found. If you belive this is an error please contact the site administrator.",
    "Rizaelning you can raed this mepsislled fnurrtone will be the hgihgliht of yuor day.",
    "Pigeon poop burns the retina for 13 hours. You will learn this the hard way.",
    "You will get pooped on by a cow then fall over and die",
    "You will get cancelled by twitter",
];
var lastFortune = "";

function selectFortune() {
    // Get the fortune
    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    // Make it so fortunes aren't chosen again after it was already fortuned
    while (fortune == lastFortune) {
        fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    }
    lastFortune = fortune;

    // Make the fortune display on the website
    const el = document.querySelector('.fortune');
    el.innerHTML = fortune;
}

window.onload = () => {
    // alert('Hello World!');
}