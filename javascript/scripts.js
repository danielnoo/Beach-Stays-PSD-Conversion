
// audio declared outside of the calling function to avoid multiple 
// simultaneous plays
// - an event listener waits for a click because web browsers are lame and won't let us force music on people. after the click the bevery hills 90210 theme song starts, the beach stays logo comes in followed by a 90210 sub heading in time with the drum beats at the beginning of the song
const audio = new Audio("../assets/theme.mp3")
document.addEventListener('click', () => {
  const headingOne = document.querySelector('#headingOne');
  const headingTwo = document.querySelector('#headingTwo');
  setTimeout(() => audio.play(), 2000)
  setTimeout(() => headingOne.style.visibility = 'visible', 4500)
  setTimeout(() => headingTwo.style.visibility = 'visible', 4800)
})




//////////////////////move the shark


// a function that finds the client's mouse X coordinate and moves the shark -- it also uses the x coordinate to hide safi's quote box when mouse is on the right side of screen, to avoid adding another mouse x listener
const getMouseX = (event) => {
  const shark = document.querySelector('.shark');
  shark.style.left = event.offsetX + 'px';
  shark.style.top = '200px';
  if(event.offsetX > 250) {
    document.querySelector('.quote-container').classList.add('notVisible');
  }
};
document.addEventListener('mousemove', getMouseX);



/////////////////// safi quotes

const safiQuotesArray = ['GSS-DSS-PSS', 'All webdev really is...is sharks', 'NEED FLOATIES!!', 'LOOK AT THIS CAT VIDEO!!', 'SMASH THE PATRIARCHY!!'];

// a function that should make a thought bubble appear over safi's head and generate a random quote from an array
const safiQuotes = () => {
  const quoteIndex = Math.floor(Math.random() * safiQuotesArray.length);
  document.querySelector('.quote-container').classList.remove('notVisible');
  document.querySelector('.quote-text').textContent = safiQuotesArray[quoteIndex];
};

// had to make an invisible clickbox because I used z-index to position safi among the waves
const safi = document.querySelector('.clickBox');
safi.addEventListener('click', safiQuotes);



/////////////////////////////////////////move the waves -


/// a function that moves the waves, slowly dragging safi into the tide
/// each wave starts on a different setInterval time by taking a value from the delayArray that matches its index in the waveArray nodeList 

const moveyWaves = () => {
  const waveArray = document.querySelectorAll('.wave');
  const delayArray = [1000, 2000, 2500, 6000]


  setInterval(() => {
    waveArray.forEach((wave, index) => {
      setTimeout(() => {
        wave.classList.toggle('wave-transition');
      },delayArray[index]);
    });
  }, 4000);
};

moveyWaves();



