const fortunes = [
    "You will <strong>die alone</strong>.",
    "You will <strong>combust randomly</strong> at the age of <strong>23</strong>",
    "Noone will marry you because you <strong>smell terrible</strong>.",
    "<strong>Error 404</strong>: Fortune not found. If you belive this is an error please contact the site administrator.",
    "Rizaelning you can raed this <strong>mepsislled fnurrtone</strong> will be the hgihgliht of yuor day.",
    "<strong>Pigeon poop burns the retina</strong> for 13 hours. You will <strong>learn this the hard way</strong>.",
    "You will get <strong>pooped on by a cow</strong> then <strong>fall over</strong> and <strong>die</strong>",
    "You will get <strong>cancelled on twitter</strong>",
    "You will <strong>drink</strong> too much <strong>gasoline</strong>",
    "Your <strong>dad will go to the store</strong> to get milk and <strong>never come back</strong>",
    "You will <strong>loose your minecraft bedwars winstreak</strong> of <strong>420</strong>",
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