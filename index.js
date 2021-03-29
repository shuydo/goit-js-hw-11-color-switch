const colors = ["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548",];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// ==================================
let intervalId;
let isActive = false;
const bodyRef = document.body;
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

startBtnRef.addEventListener("click", () => {
  if (isActive) return;

  isActive = true;
  intervalId = setInterval(colorChanger, 1000);
});

stopBtnRef.addEventListener("click", () => {
  clearInterval(intervalId);
  isActive = false;
});

const colorChanger = () => 
  bodyRef.setAttribute("bgcolor", colors[randomIntegerFromInterval(0, colors.length - 1)]);
