const canvas = document.querySelector("#JsCanvas");
const colors = document.getElementsByClassName("jscontrols__color");
const range = document.querySelector(".jsRange");
const btnMode = document.querySelector("#jsMode");
const btnSave = document.querySelector("#jsSave");

const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;
canvas.backgroundColor = "white";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 500);
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "#2c2c2c";

let drowing = false;
let mode = "paint";

function stopDrowing() {
  drowing = false;
}

function startDrowing() {
  drowing = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (mode === "paint") {
    if (!drowing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}

function HandleColorClick(event) {
  const btnColor = event.target.style.backgroundColor;
  ctx.strokeStyle = btnColor;
  ctx.fillStyle = btnColor;
}

function HandleRangeChange(event) {
  const inputRange = event.target.value;
  ctx.lineWidth = inputRange;
}

function HandleModeChange(event) {
  if (mode === "paint") {
    mode = "fill";
    btnMode.innerText = "paint";
  } else {
    mode = "paint";
    btnMode.innerText = "fill";
  }
}
function fill() {
  if (mode === "fill") {
    ctx.fillRect(0, 0, 700, 500);
  }
}
function handleCM(event) {
  event.preventDefault();
}

function HandleSave() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  console.log(image);
  link.href = image;
  link.download = "image";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startDrowing);
  canvas.addEventListener("mouseup", stopDrowing);
  canvas.addEventListener("mouseout", stopDrowing);
  canvas.addEventListener("click", fill);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", HandleColorClick)
);

range.addEventListener("change", HandleRangeChange);

btnMode.addEventListener("click", HandleModeChange);
btnSave.addEventListener("click", HandleSave);
