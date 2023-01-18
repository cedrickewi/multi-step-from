const personalInfo = document.querySelector(".personalInfo");
const selectPlan = document.querySelector(".selectPlan");
const pickAddOn = document.querySelector(".pickAddon");
const finishingUp = document.querySelector(".finishingUp");
const displaySwitch = document.querySelectorAll("#topSec");
console.log(displaySwitch);

// navigation btns
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");

window.onload = () => {
  personalInfo.style.display = "flex";
  selectPlan.style.display = "none";
  finishingUp.style.display = "none";
  pickAddOn.style.display = "none";
};

let displays = 0;

nextBtn.addEventListener("click", () => {
  displays += 1;
  displaySwitch.forEach((displayed) => {
    displayed.style.display = "none";
    displaySwitch[displays].style.display = "flex";
  });

  if (displays == 3) {
    displays = 2;
  }

});

backBtn.addEventListener("click", () => {
  if (displays < 0) {
    displays = 0;
  }
  displaySwitch.forEach((displayed) => {
    displayed.style.display = "none";
    displaySwitch[displays].style.display = "flex";
  });

  displays -= 1;
});

console.log(displaySwitch[3]);