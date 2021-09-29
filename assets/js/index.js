const fortunes = [
    ["You will <strong>die alone</strong>.", "https://whenyoudie.org/wp-content/uploads/2020/04/fear-of-dying-alone-1024x683.jpg"]
    ["You will <strong>combust randomly</strong> at the age of <strong>23</strong>", "https://bitcoinist.com/wp-content/uploads/2020/06/shutterstock_1083546056.jpg"],
    ["Noone will marry you because you <strong>smell terrible</strong>.", "https://image.shutterstock.com/image-photo/disgusted-woman-holding-stinky-shoe-260nw-469251155.jpg"],
    ["<strong>Error 404</strong>: Fortune not found. If you belive this is an error please contact the site administrator.", "https://cdn.mos.cms.futurecdn.net/6VuTjikcoSmsq4f4tPAZ9V.jpg"],
    ["Rizaelning you can raed this <strong>mepsislled fnurrtone</strong> will be the hgihgliht of yuor day.", "https://d2v9ipibika81v.cloudfront.net/uploads/sites/256/Spelling-Bee-f-1-1.png"],
    ["<strong>Pigeon poop burns the retina</strong> for 13 hours. You will <strong>learn this the hard way</strong>.", "https://pics.me.me/thumb_wwwwwwafacebook-co-gcat-pigeon-poop-burns-the-retina-for-13-20676235.png"],
    ["You will get <strong>pooped on by a cow</strong> then <strong>fall over</strong> and <strong>die</strong>", "https://modernfarmer.com/wp-content/uploads/2021/03/shutterstock_1728214024.jpg"],
    ["You will get <strong>cancelled on twitter</strong>", "https://i.insider.com/50db38a069bedd0d1000000c"],
    ["You will <strong>drink</strong> too much <strong>gasoline</strong>", "https://i.ytimg.com/vi/LX12mFeDcjQ/maxresdefault.jpg"],
    ["You will <strong>loose your minecraft bedwars winstreak</strong> of <strong>420</strong>", "https://i.ytimg.com/vi/OqEcoMG70a0/maxresdefault.jpg"],
];
var lastFortune = "";

function selectFortune() {
    // Get the fortune
    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    var pic = fortune[1] || "https://bitcoinist.com/wp-content/uploads/2020/06/shutterstock_1083546056.jpg";
    if (!fortune[1]) {
        pic = "https://bitcoinist.com/wp-content/uploads/2020/06/shutterstock_1083546056.jpg";
    }

    console.log(fortune);
    // Make it so fortunes aren't chosen again after it was already fortuned
    while (fortune[0] == lastFortune[0]) {
        fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    }
    lastFortune = fortune;

    // Make the fortune display on the website
    const el = document.querySelector('.fortune');
    el.innerHTML = fortune[0];

    document.body.style.background = `url(${pic}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
}

window.onload = () => {
    // alert('Hello World!');
}