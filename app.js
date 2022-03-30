const tipPercentages = document.querySelectorAll(".tip-percentage");
const customTipPercentageInput = document.querySelector(
  "#custom-tip-percentage"
);
const billAmtInput = document.querySelector("#bill-amount");
const noOfPeopleInput = document.querySelector("#no-of-people");

const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

const resetBtn = document.querySelector(".reset-btn");

let tipPercentage = 10;
let billAmount = 0;
let noOfPeople = 0;

function removeActiveTipClass() {
  tipPercentages.forEach((tipPercent) =>
    tipPercent.classList.remove("active-tip")
  );
}

function calculateTip() {
  if (tipPercentage <= 0 || billAmount <= 0 || noOfPeople <= 0) return;

  const tips = (tipPercentage / 100) * billAmount;

  tipAmount.textContent = `$${(tips / noOfPeople).toFixed(2)}`;
  totalAmount.textContent = `$${(
    billAmount / noOfPeople +
    tips / noOfPeople
  ).toFixed(2)}`;
}

tipPercentages.forEach((tipPercent) => {
  tipPercent.addEventListener("click", () => {
    removeActiveTipClass();
    tipPercent.classList.add("active-tip");
    tipPercentage = Number(tipPercent.dataset.tip);
    calculateTip();
  });
});

customTipPercentageInput.addEventListener("input", (evt) => {
  removeActiveTipClass();
  tipPercentage = Number(evt.target.value);
  calculateTip();
});

billAmtInput.addEventListener("input", (evt) => {
  billAmount = Number(evt.target.value);
  calculateTip();
});

noOfPeopleInput.addEventListener("input", (evt) => {
  noOfPeople = Number(evt.target.value);
  calculateTip();
});

resetBtn.addEventListener("click", () => {
  billAmtInput.value = "";
  noOfPeopleInput.value = "";
  removeActiveTipClass();
  tipPercentages[1].classList.add("active-tip");
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
