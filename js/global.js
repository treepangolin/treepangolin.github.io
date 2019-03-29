var images = ["awoo.png", "confused.png", "heart.png", "itsk.png", "snug.png"];
var image = new Image();

function chooseImage() {
    var random = Math.floor(Math.random() * images.length);
    var mascot = document.getElementById("mascot");

    while (random == localStorage.getItem("lastMascotShown")) {
        random = Math.floor(Math.random() * images.length);
    }

    image.onload = function() {
        mascot.appendChild(image);
        mascot.removeChild(document.getElementById("placeholder"));
        image.classList.add("animated", "zoomInDown", "mascot");
    };

    image.src = "img/stickers/" + images[random];
    localStorage.setItem("lastMascotShown", random);
}

window.onload = function() {
    var links = document.getElementById("links");

    setTimeout(chooseImage, 150);
    links.classList.add("animated", "fadeIn");
    links.classList.remove("invisible");
};
