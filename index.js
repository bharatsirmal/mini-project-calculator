const display = document.querySelector("#display");
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = (display.value).replace(/(\d+)%/g, "($1/100)");
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}