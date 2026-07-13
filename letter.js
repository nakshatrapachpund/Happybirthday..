// ===============================
// LETTER PAGE JAVASCRIPT
// ===============================

// The letter content
const letter = `Dear Priya ❤️,

Happy Birthday!

Some people enter our lives for a short while,
but you became one of the most beautiful chapters of my college life.

From our unforgettable Fees Kand 😂
to our endless 5th Floor Night Talks 🌃,

from those late-night Tea & Coffee sessions ☕
to our peaceful Evening Walks 🚶,

every single moment became special because you were there.

And yes...
the times you beat me for my nonsense 🤕😂
are still some of my favorite memories.

Thank you for being such an amazing friend.

I genuinely wish that your smile never fades,
your dreams always come true,
and this birthday becomes one of the happiest days of your life.

Always stay the same kind, caring and crazy person that you are.

✨ Happy Birthday once again, Priya. ❤️

With lots of love,

Your Lover,
Nakshaaa ❤️`;

const textElement = document.getElementById("letterText");

let index = 0;

function typeLetter(){

    if(index < letter.length){

        textElement.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

window.onload = function(){

    typeLetter();

}


// Next Page
function lastSurprise(){

    window.location.href="final.html";

}