const outputSi = document.querySelector(".output");
const principalAmount = document.querySelector(".principal");
const rateOf = document.querySelector(".rate");
const yearOf = document.querySelector(".year");

const resetValue = document.querySelector(".reset");
const calculateValue = document.querySelector(".calc");

calculateValue.addEventListener("click", () => {
  let SI = (principalAmount.value * rateOf.value * yearOf.value) / 100;
  outputSi.textContent = "N" + "" + SI;
  console.log(SI);
});

resetValue.addEventListener("click", () => {
  outputSi.textContent = "";
  principalAmount.value = "";
  rateOf.value = "";
  yearOf.value = "";
});
