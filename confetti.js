// for (var i = 0; i < 250; i++) {
//   create(i);
// }

// function create(i) {
//   var width = Math.random() * 8 * 4;
//   var height = width * 0.4 * 2;
//   var colourIdx = Math.ceil(Math.random() * 3);
//   var colour = "red";
//   switch(colourIdx) {
//     case 1:
//       colour = "yellow";
//       break;
//     case 2:
//       colour = "blue";
//       break;
//     default:
//       colour = "red";
//   }
//   $('<div class="confetti-'+i+' '+colour+'"></div>').css({
//     "width" : width+"px",
//     "height" : height+"px",
//     "top" : -Math.random()*20+"%",
//     "left" : Math.random()*100+"%",
//     "opacity" : Math.random()+0.5,
//     "transform" : "rotate("+Math.random()*360+"deg)"
//   }).appendTo('.wrapper');

//   drop(i);
// }

// function drop(x) {
//   $('.confetti-'+x).animate({
//     top: "100%",
//     left: "+="+Math.random()*15+"%"
//   }, Math.random()*3000 + 3000, function() {
//     reset(x);
//   });
// }

// function reset(x) {
//   $('.confetti-'+x).animate({
//     "top" : -Math.random()*20+"%",
//     "left" : "-="+Math.random()*15+"%"
//   }, 0, function() {
//     drop(x);
//   });
// }

confetti = require('canvas-confetti');

var myCanvas = document.getElementById('my-canvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// var myConfetti = confetti.create(myCanvas, {
//   resize: true,
//   useWorker: true,
//   particleCount: 50,
//   origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
// });

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();


  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  
  myConfetti({
    startVelocity: 15,
    spread: 560,
    ticks: 200,
    zIndex: 0,
    colors: ['#d1c9c6', '#a2d5d0', '#b1dbd1', '#f2b6c2', '#e17f8c', '#FEE38A'],
    particleCount: 50,
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
  });
  myConfetti({
    startVelocity: 15,
    spread: 560,
    ticks: 200,
    zIndex: 0,
    colors: ['#d1c9c6', '#a2d5d0', '#b1dbd1', '#f2b6c2', '#e17f8c', '#FEE38A'],
    particleCount: 50,
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
  });
  // since particles fall down, start a bit higher than random
  // confetti.create(myCanvas, Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  // confetti.create(myCanvas, Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
