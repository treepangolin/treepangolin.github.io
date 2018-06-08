window.onload = chooseSticker;

var stickers = ["awoo.png", "game.png", "hide.png"]

function chooseSticker() {
    var random = Math.floor(Math.random() * stickers.length)

    document.getElementById("sticker").src = stickers[random]
}
