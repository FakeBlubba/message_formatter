//  Barra Effetti
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress-bar");
const output = document.getElementById("output");

let currentProgress = 0;
const progressStep = 100 / 3;

progressContainer.addEventListener("click", function(event) {
  const clickPosition = event.pageX - progressContainer.offsetLeft;
  const progressWidth = progressContainer.offsetWidth;

  currentProgress = Math.round(clickPosition / progressWidth * 100 / progressStep) * progressStep;

  if (currentProgress > 100) {
    currentProgress = 100;
  } else if (currentProgress < 0) {
    currentProgress = 0;
  }

  progressBar.style.width = currentProgress + "%";
  updateOutput();
});

function updateOutput() {
  if (currentProgress === 0) {
    output.innerHTML = "Niente Effetti: 0";
  } else if (currentProgress === 50) {
    output.innerHTML = "Placca e Feluca: 50";
  } else if (currentProgress === 100) {
    output.innerHTML = "Effetti al completo: 100";
  }
}
