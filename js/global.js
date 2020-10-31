let greetings = [
    "ciao", "bonjour", "hello", "hi", "こんにちは", "hallo"
]

let picked_greeting = Math.floor(Math.random() * greetings.length)

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('greeting').innerHTML = greetings[picked_greeting]
})
