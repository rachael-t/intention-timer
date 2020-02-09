
// IDEAL FN for BUTTONS RESPONSE
// Sets EventListener delegated to the node above buttons.
// <section> CATEGORY BUTTONS </section> needs to respond
// as an Event Listener for any clicking within the buttons.
// Buttons probably belong to an array of responsive event
// that probably contain an array of affected variables
// being the border, the img and the text of the button.
// These three variables will change in color corresponding
// to their button type. Study is green, meditate is purple,
// exercise is red.
// Study Event Delegation and Bubbling. Event Object behaviour.


// BUTTON RESPONSE:
var clickStudy = document.querySelector('.study-button');
var clickMeditate = document.querySelector('.meditate-button');
var clickExercise = document.querySelector('.exercise-button');
var buttonSelected = "";

clickStudy.addEventListener('click', displayColorStudy)
clickMeditate.addEventListener('click', displayColorMeditate)
clickExercise.addEventListener('click', displayColorExercise)

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

// Page load to hide category warning
var categoryWarning = document.querySelector('#category-warning');


categoryWarning.addEventListener('load', hideCategoryWarning)

function hideCategoryWarning() {
      document.getElementById('category-warning').style.visibility = "hidden";
      console.log('cat is hidden');
};

// Warning message below category/input fields
var accomplishInput = document.getElementById('accomplish');
var clickStart = document.querySelector('.start-button');

clickStart.addEventListener('click', showCategoryWarning)

function showCategoryWarning() {


  if(buttonSelected === "") {
    document.getElementById('category-warning').style.visibility = "visible";
    console.log('cat should be visible');
  }
};


clickStart.addEventListener('click', showWarning)

function showWarning() {
    if(accomplishInput.value === "") {
    var handleNoWarning = document.querySelector('.no-warning')
    handleNoWarning.style.display = "block";
    }
};

clickStart.addEventListener('click', showMinWarning)

function showMinWarning() {
    var minInput = document.forms["intention-form"]["minutes"].value;
    if(isNaN(minInput)) {
    var handleNoWarningMinutes = document.querySelector('#no-warning-minutes')
    handleNoWarningMinutes.style.display = "block";
    }
};

=======
  //add something here? current error message is Cannot set property 'visibility' of undefined
  if(buttonSelected === "") {
    document.getElementsByClassName('category-warning').style.visibility = "hidden";
    console.log('It is working');
  }
};

clickStart.addEventListener('click', showWarning)

function showWarning() {
    if(accomplishInput.value === "") {
    var handleNoWarning = document.querySelector('.no-warning')
    handleNoWarning.style.display = "block";
    }
};

clickStart.addEventListener('click', showMinWarning)

function showMinWarning() {
    var minInput = document.forms["intention-form"]["minutes"].value;
    if(isNaN(minInput)) {
    var handleNoWarningMinutes = document.querySelector('#no-warning-minutes')
    handleNoWarningMinutes.style.display = "block";
    }
};

>>>>>>> 31cea8694d8c62077fdab2aba5eb5a9f7978bc43
clickStart.addEventListener('click', showSecWarning)

function showSecWarning() {
    var secInput = document.forms["intention-form"]["seconds"].value;
    if(isNaN(secInput)) {
    var handleNoWarningSeconds = document.querySelector('#no-warning-seconds')
    handleNoWarningSeconds.style.display = "block";
    }
};

//Function for switching pages when start button is click
// var timerPage = document.querySelector('.timer-page');
// var activityPage = document.querySelector('.activity-page');
// var startButton = document.querySelector('.start-button');
// var newActivityHeader = document.querySelector('.new-activity-header');
// var currentActivityHeader = document.querySelector('.current-activity-header');

// startButton.addEventListener('click', handlePageSwitch)
//
// startButton.addEventListener('click', handlePageSwitch)
//
// function handlePageSwitch() {
//   activityPage.classList.add('hidden');
//   timerPage.classList.remove('hidden');
//   newActivityHeader.classList.add('hidden');
//   currentActivityHeader.classList.remove('hidden');
// };

// Sketch for Input Transfer
// var accomplishInput = document.querySelector('#accomplish');
// var accDisplay = document.querySelector('#accomplish-display');

// startButton.addEventListener('click', getInput)

// function getInput() {
//     accomplishInput.innerText = accDisplay.value;
// }





//SKETCH FOR LOOP WHEN CHANGING PAGE:
// startButton.addEventListener('click', changePage)
//
// function changePage () {
//   var inputList = [categorySelection, accomplishInput, minInput, secInput]
//   for (var i = 0; i < inputList.length; i++)
//     if (inputList[i] = true) {}
//     handlePageSwitch()
//   }
// }
// would require handlePageSwitch eventListener to be removed







// Rachael's attempt at input field transfer
// In html:
// For this example I will be using the "what do you want to accomplish" field. First, need to add an ID to the input field. Example could be id="user-input-accomplish". We would then need to add an ID to where the information is going to move to, so in the new timer-page create an empty p element with span added <p><span id='accomplish-display'></span></p>.
// I think we need to add to the start button onclick="showAccomplishInput();" so that when the button is click, it knows to run the following function.
// In JavaScript:
// function showAccomplishInput() {
//   document.getElementById('accomplish-display').innerHTML = document.getElementById('user-input-accomplish').value; }
//
// Scoping out for all three (need to figure out category selection):

// function showInput() {
//   document.getElementById('accomplish-display').innerHTML = document.getElementById('user-input-accomplish').value;
//
//   document.getElementById('minutes-display').innerHTML = document.getElementById('user-input-minutes').value;
//
//   document.getElementById('seconds-display').innerHTML = document.getElementById('user-input-seconds').value;
// }

// all of this may need to be included with the warning if statements - if all of the fields have inputs, then run this function.

//Rachael's ATTEMPT to loop through select at least one category - lots of issue with this logic but it was a try
// var allCategoryButtons = document.querySelectorAll('.activity-button');
//
// allCategoryButtons.addEventListener('click', categorySelected);
//
// function categorySelected() {
//   allCategoryButtons = 0;
//   for(var i = 0; i < allCategoryButtons.length; i++) {
//     if (allCategoryButtons[i].value = '.study-button') {
//       clickStudy.innerHTML = `<button class="activity-button study-button study-active">
//             <img src="./assets/study-active.svg"
//             alt="study activate logo">Study</button>`;
//     } if (allCategoryButtons[i].value = '.meditate-button') {
//       clickMeditate.innerHTML =`
//       <button class="activity-button meditate-button meditate-active">
//             <img src="./assets/meditate-active.svg"
//             alt="meditate activate logo">Meditate</button>`;
//     } if (allCategoryButtons[i].value = '.exercise-button') {
//       clickExercise.innerHTML =`
//       <button class="activity-button exercise-button exercise-active">
//             <img src="./assets/exercise-active.svg"
//             alt="exercise activate logo">Exercise</button>`;
//     } else {
//       alert('Please select a category');
//     }
//   }
// };

