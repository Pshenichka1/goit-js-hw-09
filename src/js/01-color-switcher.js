const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

  let hex = [
   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",];
let timeId = null;
// startBtn.setAttribute('disabled', false);

startBtn.addEventListener('click', () => {
   timeId = setInterval(() => {
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
  }, 1000) 
startBtn.setAttribute('disabled', true);
  
}); 

  stopBtn.addEventListener('click', () => {
    clearInterval(timeId)
      startBtn.removeAttribute('disabled')  === false;
  
});
 

   function generateHex() {
   let hexColor = "#";
   for (let i = 0; i < 6; i++) {
     hexColor += hex[getRandomHexColor()];
    } return hexColor;
 }
   function getRandomHexColor() {
    return Math.floor(Math.random() * hex.length);
   }


