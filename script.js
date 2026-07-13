// ===============================
// CINEMATIC INTRO SCRIPT
// ===============================

const messages = [
  "Hey Priya... ❤️",
  "Today isn't just another day...",
  "It's the birthday of someone who makes this world brighter... ✨",
  "So I made something especially for you..."
];

let messageIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");
const button = document.getElementById("continueBtn");

// Typing Animation
function typeWriter() {

    if (messageIndex < messages.length) {

        if (charIndex < messages[messageIndex].length) {

            typing.innerHTML += messages[messageIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeWriter, 60);

        } else {

            setTimeout(() => {

                typing.innerHTML += "<br><br>";

                messageIndex++;

                charIndex = 0;

                typeWriter();

            }, 1200);

        }

    } else {

        button.style.display = "inline-block";

    }

}

// Start typing after 1 second
setTimeout(typeWriter, 1000);


// Continue Button
function showGift() {

    document.querySelector(".intro").style.display = "none";

    document.getElementById("giftSection").style.display = "block";

    const music = document.getElementById("music");

    music.play();

}


// Gift Click
function openGift() {

    // Go to the next page
    window.location.href = "memories.html";

}