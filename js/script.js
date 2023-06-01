"use strict";
const submitBtn = document.getElementById("sub-btn");
const rateAgain = document.getElementById("rate-again-btn");
const mainContainer = document.querySelector(".main-container");
const thankyouContainer = document.querySelector(".thank-you-container");
const rateBtn = document.querySelectorAll(".rate-btn");
const rates = document.querySelector(".rates");

submitBtn.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});
rateAgain.addEventListener("click", () => {
  thankyouContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
});
rateBtn.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(rate.innerHTML);
    rates.innerHTML = rate.innerHTML;
  });
});
