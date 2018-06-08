var images = ["awoo.png", "game.png", "hide.png", "thumbsup.png"]
var image = new Image()
var faLogo = new Image()

function chooseImage() {
    var random = Math.floor(Math.random() * images.length)
    var mascot = document.getElementById("mascot")

    while (random == localStorage.getItem("lastMascotShown")) {
        random = Math.floor(Math.random() * images.length)
    }

    image.onload = function() {
        mascot.appendChild(image)
        mascot.removeChild(document.getElementById("placeholder"))
        image.classList.add("animated", "zoomInDown")
    }

    image.src = images[random]
    localStorage.setItem("lastMascotShown", random)
    image.style.width = "320px"
}

faLogo.onload = function() {
    var links = document.getElementById("links")
    var faHref = document.getElementById("fa-href")

    setTimeout(chooseImage, 150)
    links.classList.add("animated", "fadeIn")
    links.classList.remove("invisible")
    faHref.appendChild(faLogo)
}

faLogo.src = "social_fa.png"
