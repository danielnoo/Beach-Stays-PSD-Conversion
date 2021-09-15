console.log('hello')








// a function that finds the client's mouse X coordinate
function getMouseX (event) {
  console.log(event.offsetX);
  const shark = document.querySelector('.shark');
  shark.style.left = event.offsetX;
};


document.addEventListener('mousemove', getMouseX);









const waveArray = document.querySelectorAll('.wave');
const delayArray = [1000, 2000, 2500, 6000]











setInterval(() => {
  waveArray.forEach((wave, index) => {
    setTimeout(() => {
      wave.classList.toggle('wave-transition');
    },delayArray[index])
  })
},4000)




function startWave () {
  let wave = document.querySelector('.wave3');
  wave.classList.toggle('wave-transition');
  setTimeout(() => {
    
    startWave()
  }, 3000)
};
