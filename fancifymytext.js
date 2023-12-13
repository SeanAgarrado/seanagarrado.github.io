const textArea = document.getElementById("textInput");

function showAlert() {
    alert("Hello, world!");
}

function biggerText() {
    textArea.style.fontSize = "24pt";
}

function applyStyles() {
    const isFancy = document.getElementById("fancyShmancy").checked;

    textArea.style.fontWeight = isFancy ? "bold" : "normal";
    textArea.style.color = isFancy ? "blue" : "black";
    textArea.style.textDecoration = isFancy ? "underline" : "none";
}

function mooText() {
    textArea.value = textArea.value.toUpperCase().replace(/\b\.\s*/g, "-Moo. ");
}
