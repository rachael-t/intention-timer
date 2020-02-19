// Variables:
var clickStudy = document.querySelector('.study-button');
var clickMeditate = document.querySelector('.meditate-button');
var clickExercise = document.querySelector('.exercise-button');
var buttonSelected = "";
var categoryWarning = document.querySelector('#category-warning');
var accomplishInput = document.getElementById('accomplish');
var clickStart = document.querySelector('.start-button');
var timerPage = document.querySelector('.timer-page');
var activityPage = document.querySelector('.activity-page');
var newActivityHeader = document.querySelector('.new-activity-header');
var currentActivityHeader = document.querySelector('.current-activity-header');
var timerButton = document.querySelector('#initiate-timer');
var accomplishInput = document.querySelector('#accomplish');
var accDisplay = document.querySelector('#accomplish-display');
var timeDisplay = document.querySelector('#time-display');
var minInput = document.getElementById('minutes');
var secInput = document.getElementById('seconds');
var totalTime;
var timeRemaining = 0;
var minRemaining = 0;
var secRemaining = 0;
var logAct = document.querySelector('.logging');

// Event Listeners:
clickStudy.addEventListener('click', displayColorStudy)
clickMeditate.addEventListener('click', displayColorMeditate)
clickExercise.addEventListener('click', displayColorExercise)
window.addEventListener('load', hideCategoryWarning)
clickStart.addEventListener('click', moveToTimerPage)
timerButton.addEventListener('click', timer)
logAct.addEventListener('click', handleLog)

// Functions:
function displayColorStudy() {
  clickStudy.innerHTML = `<button class="activity-button study-button study-active">
    <img src="./assets/study-active.svg"
    alt="study activate logo">Study</button>`;
  clickMeditate.innerHTML =`
  <button class="activity-button meditate-button">
    <img src="./assets/meditate.svg"
    alt="meditate logo">Meditate</button>`;
  clickExercise.innerHTML =`
  <button class="activity-button exercise-button">
    <img src="./assets/exercise.svg"
    alt="exercise logo">Exercise</button>`;
  buttonSelected = "study";
};

function displayColorMeditate() {
  clickMeditate.innerHTML =`
  <button class="activity-button meditate-button meditate-active">
    <img src="./assets/meditate-active.svg"
    alt="meditate activate logo">Meditate</button>`;
  clickStudy.innerHTML = `<button class="activity-button study-button">
    <img src="./assets/study.svg"
    alt="study logo">Study</button>`;
  clickExercise.innerHTML =`
  <button class="activity-button exercise-button">
    <img src="./assets/exercise.svg"
    alt="exercise logo">Exercise</button>`;
  buttonSelected = "meditate";
};

function displayColorExercise() {
  clickExercise.innerHTML =`
  <button class="activity-button exercise-button exercise-active">
    <img src="./assets/exercise-active.svg"
    alt="exercise activate logo">Exercise</button>`;
  clickStudy.innerHTML = `<button class="activity-button study-button">
    <img src="./assets/study.svg"
    alt="study logo">Study</button>`;
  clickMeditate.innerHTML =`
  <button class="activity-button meditate-button">
    <img src="./assets/meditate.svg"
    alt="meditate logo">Meditate</button>`;
  buttonSelected = "exercise";
};

function hideCategoryWarning() {
  document.getElementById('category-warning').style.visibility = "hidden";
};

function handlePageSwitch() {
  var isSelect = true;
  var isFilled = true;
  var hasMin = true;
  var hasSec = true;
  if(buttonSelected === "") {
    document.getElementById('category-warning').style.visibility = "visible";
    isSelect = false;
  }
  if(accomplishInput.value === "") {
    var handleNoWarning = document.querySelector('.no-warning')
    handleNoWarning.style.display = "block";
    isFilled = false;
  }
  var minInput = document.forms["intention-form"]["minutes"].value;
  if(isNaN(minInput)) {
   var handleNoWarningMinutes = document.querySelector('#no-warning-minutes')
   handleNoWarningMinutes.style.display = "block";
   hasMin = false;
  }
  var secInput = document.forms["intention-form"]["seconds"].value;
  if(isNaN(secInput)) {
    var handleNoWarningSeconds = document.querySelector('#no-warning-seconds')
    handleNoWarningSeconds.style.display = "block";
    hasSec = false;
  }
  else if(isSelect && isFilled && hasMin && hasSec) {
    activityPage.classList.add('hidden');
    timerPage.classList.remove('hidden');
    newActivityHeader.classList.add('hidden');
    currentActivityHeader.classList.remove('hidden');
  };
};

function timerColor() {
  if(buttonSelected === "study") {
    timerButton.style.border="2px solid #B3FD78"
  } else if (buttonSelected === "meditate") {
    timerButton.style.border="2px solid #C278FD"
  } else if (buttonSelected === "exercise") {
    timerButton.style.border="2px solid #FD8078"
  }
};

function moveToTimerPage () {
  handlePageSwitch();
  timerColor();
  getInput();
}

function timerFinished() {
  var timerInit = document.querySelector('#initiate-timer');
  var logAct = document.querySelector('.logging');
  var accomplishment = document.querySelector('#accomplish-display');
  var timerReplace = document.querySelector('#time-display');
  var messReplace = document.querySelector('#congrats');
  timerInit.innerText = 'COMPLETE!';
  if(document.querySelector('#initiate-timer').innerText === 'COMPLETE!') {
    logAct.classList.remove('hidden');
    accomplishment.classList.add('hidden');
    timerReplace.classList.add('hidden');
    messReplace.classList.remove('hidden');
  }
};

function getInput() {
  var timeValue = minInput.value.toString() + ":" + secInput.value.toString();
  totalTime = Number(minInput.value) * 60 + Number(secInput.value);
  timeDisplay.innerText = timeValue;
  accDisplay.innerText = accomplishInput.value;
  return totalTime;
};

function timer(totalTime) {
  timeRemaining = getInput();
  document.getElementById('time-display').innerHTML = `
    <p id="minutes-display"></p>
    <p id="seconds-display"></p>
  `;
  intervalTimer = setInterval(function() {
    minRemaining = Math.floor(timeRemaining / 60);
    secRemaining = (timeRemaining % 60);
    timeRemaining--;
    if (secRemaining < 0) {
      clearInterval(intervalTimer);
      intervalTimer = null;
      document.getElementById('time-display').innerHTML= "00:00";
      timerFinished();
    } else if (secRemaining % 60 < 10) {
      document.querySelector('#minutes-display').innerHTML= minRemaining;
      document.querySelector('#seconds-display').innerHTML= ":0" + secRemaining;
    } else if (secRemaining / 60 < 1) {
      document.getElementById('minutes-display').innerHTML= `0${minRemaining}`
      document.getElementById('seconds-display').innerHTML= `:${secRemaining}`;
    }
  }, 1000);
};

function handleLog() {
  var congratsMess = document.querySelector('#congrats');
  var timerButt = document.querySelector('#initiate-timer');
  var newAct = document.querySelector('.create-new-act');
  var logButt = document.querySelector('.logging');
  var defaultChange = document.querySelector('.default-message');
  var newCard = document.querySelector('.new-cards')
  if(logButt.classList.contains('logging')) {
    congratsMess.style.display = 'none';
    defaultChange.style.display = 'none';
    logButt.style.display = 'none';
    timerButt.style.display = 'none';
    newCard.style.display = 'block';
    newAct.style.display = 'block';
  }
}
