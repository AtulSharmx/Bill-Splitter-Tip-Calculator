// Inputs aur button ko target kar rahe hai
var billInput = document.getElementById("bill-amount");
var tipInput = document.getElementById("tip-percentage");
var peopleInput = document.getElementById("people-count");
var calculateBtn = document.getElementById("calculate-btn");

var tipResult = document.getElementById("tip-per-person");
var totalResult = document.getElementById("total-per-person");
var errorText = document.getElementById("error-message");

calculateBtn.addEventListener("click", function() {
    // Input values ko numbers me badal rahe hai
    var bill = parseFloat(billInput.value);
    var tip = parseFloat(tipInput.value);
    var people = parseInt(peopleInput.value);

    // Purane error aur results ko clean kar dete hai
    errorText.innerText = "";
    tipResult.innerText = "$0.00";
    totalResult.innerText = "$0.00";

    // 0 log honge ya user input empty chhodega toh error dikhana hai bhai
    if (!people || people <= 0) {
        errorText.innerText = "Please enter a valid number of people (at least 1)!";
        return;
    }

    // Agar bill ya tip empty ya invalid ho toh unhe 0 maan lo
    if (isNaN(bill) || bill < 0) {
        bill = 0;
    }
    if (isNaN(tip) || tip < 0) {
        tip = 0;
    }

    // Yaha pure calculation ka logic chal raha hai
    var totalTip = (bill * tip) / 100;
    var totalBill = bill + totalTip;

    var tipPerPerson = totalTip / people;
    var totalPerPerson = totalBill / people;

    // Output ko UI par update kar rahe hai round off karke
    tipResult.innerText = "$" + tipPerPerson.toFixed(2);
    totalResult.innerText = "$" + totalPerPerson.toFixed(2);
});
