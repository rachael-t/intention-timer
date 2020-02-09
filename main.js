// VARIABLES:
var clickStudy = document.querySelector('.study-button');
var clickMeditate = document.querySelector('.meditate-button');
var clickExercise = document.querySelector('.exercise-button');
var buttonSelected = "";
var categoryWarning = document.querySelector('#category-warning');
var accomplishInput = document.getElementById('accomplish');
var clickStart = document.querySelector('.start-button');

// Event Listeners
clickStudy.addEventListener('click', displayColorStudy)
clickMeditate.addEventListener('click', displayColorMeditate)
clickExercise.addEventListener('click', displayColorExercise)
categoryWarning.addEventListener('load', hideCategoryWarning)
clickStart.addEventListener('click', showCategoryWarning)
clickStart.addEventListener('click', showWarning)
clickStart.addEventListener('click', showMinWarning)
clickStart.addEventListener('click', showSecWarning)

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

function showCategoryWarning() {
      if(buttonSelected === "") {
        document.getElementById('category-warning').style.visibility = "visible";
        console.log('cat should be visible');
      }
};

function showWarning() {
    if(accomplishInput.value === "") {
    var handleNoWarning = document.querySelector('.no-warning')
    handleNoWarning.style.display = "block";
    }
};

function showMinWarning() {
    var minInput = document.forms["intention-form"]["minutes"].value;
    if(isNaN(minInput)) {
    var handleNoWarningMinutes = document.querySelector('#no-warning-minutes')
    handleNoWarningMinutes.style.display = "block";
    }
};

function showSecWarning() {
    var secInput = document.forms["intention-form"]["seconds"].value;
    if(isNaN(secInput)) {
    var handleNoWarningSeconds = document.querySelector('#no-warning-seconds')
    handleNoWarningSeconds.style.display = "block";
    }
};

// Function for switching pages when start button is click
var timerPage = document.querySelector('.timer-page');
var activityPage = document.querySelector('.activity-page');
var startButton = document.querySelector('.start-button');
var newActivityHeader = document.querySelector('.new-activity-header');
var currentActivityHeader = document.querySelector('.current-activity-header');

startButton.addEventListener('click', handlePageSwitch)

function handlePageSwitch() {
  activityPage.classList.add('hidden');
  timerPage.classList.remove('hidden');
  newActivityHeader.classList.add('hidden');
  currentActivityHeader.classList.remove('hidden');
};

// Sketch for Input Transfer
// var accomplishInput = document.querySelector('#accomplish');
// var accDisplay = document.querySelector('#accomplish-display');

// startButton.addEventListener('click', getInput)

// function getInput() {
//     accomplishInput.innerText = accDisplay.value;
// }