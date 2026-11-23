const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipEach = document.getElementById("tipEach");
const totalEach = document.getElementById("totalEach");
const error = document.getElementById("error");

// reportEmpty is on only for the button, so typing a bill before filling in
// the people field does not immediately scold you.
function calculate(reportEmpty) {
    let bill = parseFloat(billInput.value) || 0;
    let tip = parseFloat(tipInput.value) || 0;
    const peopleRaw = peopleInput.value.trim();
    const people = parseInt(peopleRaw, 10);
    const peopleValid = people >= 1;

    error.textContent = (!peopleValid && (reportEmpty || peopleRaw !== ""))
        ? "Enter at least 1 person"
        : "";

    if (!peopleValid) {
        tipEach.textContent = "$0.00";
        totalEach.textContent = "$0.00";
        return;
    }

    if (bill < 0) bill = 0;
    if (tip < 0) tip = 0;

    const tipAmount = bill * tip / 100;

    tipEach.textContent = "$" + (tipAmount / people).toFixed(2);
    totalEach.textContent = "$" + ((bill + tipAmount) / people).toFixed(2);
}

document.getElementById("calc").addEventListener("click", function () {
    calculate(true);
});

[billInput, tipInput, peopleInput].forEach(function (el) {
    el.addEventListener("input", function () {
        calculate(false);
    });
});
