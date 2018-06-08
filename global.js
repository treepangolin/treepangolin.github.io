window.onload = chooseImage;

var images = ["awoo.png", "game.png", "hide.png"]
var image = new Image()

function chooseImage() {
    var random = Math.floor(Math.random() * images.length)
    var mascot = document.getElementById("mascot")

    image.onload = function() {
        mascot.appendChild(image)
        image.classList.add("animated", "fadeInDown")
    }

    image.src = images[random]
    image.style.width = "320px"
}
