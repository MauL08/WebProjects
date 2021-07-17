alert("Please use Laptop for Better Experience!");
alert("Don't try to copy and paste text, because it will cause an error in the game!");

const content = 'http://api.quotable.io/random';
var score = 0;

document.getElementById("type").addEventListener("input", () => {
    const letterText = document.getElementById("text").querySelectorAll("span");
    const letterType = document.getElementById("type").value.split('');

    let allCorrect = 1;

    letterText.forEach((charSplit, index) => {
        const Char = letterType[index];
        if (Char == null) {
            charSplit.classList.remove("true");
            charSplit.classList.remove("false");
            allCorrect = 0;
        }
        else if (Char === charSplit.innerText) {
            charSplit.classList.add("true");
            charSplit.classList.remove("false");
            allCorrect = 1;
        }
        else {
            charSplit.classList.remove("true");
            charSplit.classList.add("false");
            allCorrect = 0;
        }
    });

    if (allCorrect === 1) {
        nextContent();
        score++;
    }

    document.querySelector("#score").innerHTML = score + " Point";

    if (score == 0) {
        status = "Score 0, Please the play game to add score!";
    }
    else if (score > 0 && score < 5) {
        status = "Your Score is " + score + ". You're Noob at this Game.";
    } 
    else if (score >= 5 && score < 10) {
        status = "Your Score is " + score + ". You're Good at this Game.";
    }
    else if (score >= 10 && score < 20) {
        status = "Your Score is " + score + ". You're Pro at this Game.";
    }
    else if (score >= 20) {
        status = "Beyond GODLIKE!!";
    }
});

function getContent() {
    return fetch(content)
        .then(response => response.json())
        .then(data => data.content)
}

async function nextContent() {
    const text = await getContent();
    document.getElementById("text").innerText = '';
    document.getElementById("type").value = null;
    text.split('').forEach(char => {
        const charSplit = document.createElement("span");
        charSplit.innerText = char;
        document.getElementById("text").appendChild(charSplit);  
    });
};

var timemax = 120;
function focusFunction() {
    var timer = setInterval(() => {
        document.getElementById("time").innerHTML = timemax + "s";
        if (timemax <= 0) {
            clearInterval(timer);
            alert("Status : " + status);
            alert("Game is finished, restart Page to Play again!");
        };
        timemax--;
    },1000);
};

nextContent();