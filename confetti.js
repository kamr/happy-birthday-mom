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

const celebrate = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 15, spread: 560, ticks: 1000, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
    
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 100 * (timeLeft / duration);

    window.confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    window.confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

celebrate();