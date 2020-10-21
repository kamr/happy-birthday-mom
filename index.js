var cube = document.getElementById('D3Cube');
cube.addEventListener('click',function() {
  console.log("clicked the cube");
  cube.addEventListener('animationiteration', stopSpinning, false);
  document.getElementById('pyrobox').classList.add('show');
  document.getElementById("stevie").play();
})
window.onload = function() {
    console.log('play music')
    document.getElementById("my_audio").play();
}

function stopIntroSong() {
  console.log("hi")
  document.getElementById("my_audio").pause();
}

function stopSpinning() {
  console.log("open the box")
  cube.classList.remove('spinBox');
  cube.classList.add('openBox');
  document.getElementById('side1').classList.add('openTop');
  document.getElementById('side2').classList.add('openSide2');
  document.getElementById('side3').classList.add('openSide3');
  document.getElementById('side4').classList.add('openSide4');
  document.getElementById('side5').classList.add('openSide5');
  document.getElementById('laptop').classList.add('openLaptop');
  document.getElementById('laptop').addEventListener('animationend', changeText, false);
}

function changeText() {
  console.log("end open animation");
  document.getElementById('title-open').classList.add('animation-end');
  document.getElementById('title-laptop').classList.add('animation-end');
  document.getElementById('click-laptop').classList.add('animation-end');
}
