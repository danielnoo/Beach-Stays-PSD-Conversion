
// audio declared outside of the calling function to avoid multiple 
// simultaneous plays
const audio = new Audio("../assets/theme.mp3")
document.addEventListener('click', () => {
  const headingOne = document.querySelector('#headingOne');
  const headingTwo = document.querySelector('#headingTwo');
  setTimeout(() => audio.play(), 2000)
  setTimeout(() => headingOne.style.visibility = 'visible', 4500)
  setTimeout(() => headingTwo.style.visibility = 'visible', 4800)
})


// a function that finds the client's mouse X coordinate and moves the shark
const getMouseX = (event) => {
  const shark = document.querySelector('.shark');
  shark.style.left = event.offsetX + 'px';
  shark.style.top = '200px';
};
document.addEventListener('mousemove', getMouseX);




/// a function that moves the waves, slowly dragging safi into the tide

const moveyWaves = () => {
  const waveArray = document.querySelectorAll('.wave');
  const delayArray = [1000, 2000, 2500, 6000]


  setInterval(() => {
    waveArray.forEach((wave, index) => {
      setTimeout(() => {
        wave.classList.toggle('wave-transition');
      },delayArray[index]);
    });
  },4000);
};

moveyWaves();



