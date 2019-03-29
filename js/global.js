var images = ["awoo.png", "confused.png", "heart.png", "itsk.png", "snug.png"];
var image = new Image();

window.onload = function() {
    var random = Math.floor(Math.random() * images.length);
    var mascot = document.getElementById("mascot");

    while (random == localStorage.getItem("lastMascotShown")) {
        random = Math.floor(Math.random() * images.length);
    }

    image.onload = function() {
        fadeLinks();
        mascot.appendChild(image);
        mascot.removeChild(document.getElementById("placeholder"));
        image.classList.add("animated", "fadeInDownBig", "mascot");
    };

    image.src = "img/stickers/" + images[random];
    localStorage.setItem("lastMascotShown", random);
};

function fadeLinks() {
    links.classList.add("animated", "fadeInUp");
    links.classList.remove("invisible");
}
