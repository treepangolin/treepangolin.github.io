window.onload = chooseImage;

var images = ["awoo.png", "game.png", "hide.png"]
var image = new Image()

function chooseImage() {
    var random = Math.floor(Math.random() * images.length)
    var mascot = document.getElementById("mascot")

    while (random == localStorage.getItem("lastMascotShown")) {
        random = Math.floor(Math.random() * images.length)
    }

    image.onload = function() {
        mascot.appendChild(image)
        image.classList.add("animated", "zoomInDown")
    }

    image.src = images[random]
    localStorage.setItem("lastMascotShown", random)
    image.style.width = "320px"
}
