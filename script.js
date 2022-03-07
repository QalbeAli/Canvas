const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let X = 0;
let Y = 0;

function draw(e) {
    console.log(e);
}
canvas.addEventListener('mousedraw',draw);