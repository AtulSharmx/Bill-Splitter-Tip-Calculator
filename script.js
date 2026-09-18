const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipEach = document.getElementById("tipEach");
const totalEach = document.getElementById("totalEach");
const error = document.getElementById("error");

document.getElementById("calc").addEventListener("click", function () {
    let bill = parseFloat(billInput.value) || 0;
    let tip = parseFloat(tipInput.value) || 0;
    let people = parseInt(peopleInput.value);

    error.textContent = "";
    tipEach.textContent = "$0.00";
    totalEach.textContent = "$0.00";

    if (!people || people < 1) {
        error.textContent = "Enter at least 1 person";
        return;
    }

    if (bill < 0) bill = 0;
    if (tip < 0) tip = 0;

    let tipAmount = bill * tip / 100;

    tipEach.textContent = "$" + (tipAmount / people).toFixed(2);
    totalEach.textContent = "$" + ((bill + tipAmount) / people).toFixed(2);
});
