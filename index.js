const button = document.getElementById("button");
const output = document.getElementById("value");
const numbtns = document.querySelectorAll('.numbers button');
const btns = document.querySelectorAll("button");

// Handle button inputs
numbtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent === "AC") {
            output.value = "";
        } else if (btn.textContent === "del") {
            output.value = output.value.slice(0, -1);
        } else {
            output.value += btn.textContent;
        }
    });
});

// Evaluate expression and speak result
button.addEventListener('click', () => {
    try {
        const result = eval(output.value);
        output.value = result;

        // Speak the result
        const utterance = new SpeechSynthesisUtterance("guruu the result is " + result);
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices[0];
        }
        speechSynthesis.speak(utterance);
    } catch {
        alert("Invalid expression!");
        output.value = "";
    }
});

// Theme toggle
let greenToggle = false;
let redToggle = false;

const green = document.getElementById("green");
const red = document.getElementById("red");

green.addEventListener('click', () => {
    if (greenToggle) {
        document.body.style.background = "black";
    } else {
        document.body.style.background = "rgba(11, 12, 2, 0.8)";
    }
    greenToggle = !greenToggle;
});

red.addEventListener('click', () => {
    if (redToggle) {
        document.body.style.background = "#330000";  // Dark red background
    } else {
        document.body.style.background = "#660000";  // Slightly different red
    }
    redToggle = !redToggle;
});
