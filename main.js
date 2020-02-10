// VARIABLES:
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
var minInput = document.querySelector('#minutes');
var secInput = document.querySelector('#seconds');


// Event Listeners
clickStudy.addEventListener('click', displayColorStudy)
clickMeditate.addEventListener('click', displayColorMeditate)
clickExercise.addEventListener('click', displayColorExercise)
window.addEventListener('load', hideCategoryWarning)
clickStart.addEventListener('click', handlePageSwitch)
clickStart.addEventListener('click', timerColor)
clickStart.addEventListener('click', getInput)

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
      console.log('cat is hidden');
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

function getInput() {
  var timeValue = minInput.value.toString() + ":" + secInput.value.toString();
  console.log(timeValue);
  timeDisplay.innerText = timeValue;
  accDisplay.innerText = accomplishInput.value;
};
