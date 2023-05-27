/* 
    Code to generate random numbers in range:
         Math.floor(Math.random() * (max - min + 1) ) + min;
    */


var secretCode = random4Digit();
var sCodeArray = [];
let chances = document.getElementById("chances");
var youWonAudio = new Audio("./resources/you-won.mp3")
var youloseAudio = new Audio("./resources/you-lose.mp3")

getsCodeArray();
console.log(secretCode);

let timer = document.getElementById("timer");
let timerVal = 100; //time in seconds
var timerInterval;

function startInterval() {
    timerInterval = setInterval(() => {
        if (timerVal < 1) {
            clearInterval(timerInterval);
            showPopup("Times Up !!!", "You have failed to crack the code under time. Try Again  and Don't Give Up", false);
        }
        timer.innerText = timerVal--;
    }, 1000);
}

function getsCodeArray() {
    for (let i = 0; i < secretCode.length; i++) {
        sCodeArray.push(secretCode.charAt(i));
    }
}

function random4Digit() {
    return shuffle("0123456789".split('')).join('').substring(0, 4);
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


let isFirstClick = true;
function check() {
    if (isFirstClick == true) {
        startInterval();
        isFirstClick = false;
    }
    let g1 = document.getElementById("n0").value;
    let g2 = document.getElementById("n1").value;
    let g3 = document.getElementById("n2").value;
    let g4 = document.getElementById("n3").value;
    let guess = [g1, g2, g3, g4];
    let guessStr = g1 + g2 + g3 + g4;

    // changing background-colour of all digits to "red" [initialize with red]
    for (let i = 0; i < 4; i++) {
        let light = document.getElementById(i);
        light.style.backgroundColor = "red";
        light.style.boxShadow = "0 0 25px 10px red"
    }
    //checking for correct digits but at wrong place [yellow light]
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (guess[i] === sCodeArray[j]) {
                let light = document.getElementById(i);
                light.style.backgroundColor = "#ffd500";
                light.style.boxShadow = "0 0 25px 10px #ffd500"
            }
        }
    }
    //checking for digits at right place [green light]
    for (let i = 0; i < 4; i++) {
        if (guess[i] === sCodeArray[i]) {
            let light = document.getElementById(i);
            light.style.backgroundColor = "green";
            light.style.boxShadow = "0 0 25px 10px green";
            document.getElementsByTagName('input')[i].style.borderRadius = "2rem 0.1rem";
        }
    }
    if (guessStr === secretCode) { //if won
        clearInterval(timerInterval);
        setTimeout(() => {
            showPopup("You Won !!!", "Congratulations! You have Cracked the Secret Code. Hope you have enjoyed the game.", true);
        }, 1000);
        return;
    }

    chances.innerText = chances.innerText - 1; //updating no of chances
    if (chances.innerText == 0) {
        clearInterval(timerInterval);
        showPopup("You Lose !!!", "You ran out of attempts. Try Again  and Don't Give Up", false);
    }

}


let popup = document.getElementById("popup");
function showPopup(title, message, isSuccess) {
    popup.style.display = "block";
    popup.parentElement.style.zIndex = "999";
    document.getElementById("popup-heading").innerText = title;
    document.getElementById("popup-para").innerText = message;
    document.getElementById("popup-effected-blur-area").classList.add("blur-filter");
    if (isSuccess !== true) {
        popup.style.backgroundColor = "#ff0000";
        popup.style.boxShadow = "1px 4px 28px 6px rgba(255, 0, 0, 1)";
        youloseAudio.play();
    }
    else youWonAudio.play();

}