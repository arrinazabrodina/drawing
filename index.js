"use strict";

var canvas = document.getElementById("canvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var context = canvas.getContext("2d");
var colorPicker = document.getElementById("colorPicker");
var lineWidthInput = document.getElementById("lineWidth");

var isDrawing = false;
var prevX, prevY;

const clearsheet = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

context.strokeStyle = colorPicker.value;

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true;
  console.log(e.clientX, canvas.getBoundingClientRect().left);

  prevX = e.clientX - canvas.getBoundingClientRect().left;
  prevY = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("mousemove", function (e) {
  if (!isDrawing) return;

  var x = e.clientX - canvas.getBoundingClientRect().left;
  var y = e.clientY - canvas.getBoundingClientRect().top;

  context.beginPath();
  context.moveTo(prevX, prevY);
  context.lineTo(x, y);
  context.stroke();

  prevX = x;
  prevY = y;
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});

canvas.addEventListener("mouseout", function () {
  isDrawing = false;
});

colorPicker.addEventListener("input", function () {
  context.strokeStyle = colorPicker.value;
});

lineWidthInput.addEventListener("input", () => {
    context.lineWidth = parseInt(lineWidthInput.value);
});
