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



// BUTTON RESPONSE SKETCH:
// VARIABLES
var clickStudy = document.querySelector('.study-button');
var clickMeditate = document.querySelector('.meditate-button');
var clickExercise = document.querySelector('.exercise-button');

// event listeners
clickStudy.addEventListener('click', displayColorStudy)
clickMeditate.addEventListener('click', displayColorMeditate)
clickExercise.addEventListener('click', displayColorExercise)

// fn
function displayColorStudy() {
    clickStudy.innerHTML = `<button class="activity-button study-button study-active">
          <img src="./assets/study-active.svg"
          alt="study activate logo">Study</button>`
};

function displayColorMeditate() {
    clickMeditate.innerHTML =`
    <button class="activity-button meditate-button meditate-active">
          <img src="./assets/meditate-active.svg"
          alt="meditate activate logo">Meditate</button>`
};

function displayColorExercise() {
    clickExercise.innerHTML =`
    <button class="activity-button exercise-button exercise-active">
          <img src="./assets/exercise-active.svg"
          alt="exercise activate logo">Exercise</button>`
};


// get var for start-button class
// get var for warning-message class
// get var for no-warning class


var accomplishInput = document.getElementById('accomplish');
var clickStart = document.querySelector('.start-button');

//FOR CARLOS: I left these here, but since I defined them in the functions below, we could remove. Kept them as I worked through the functions.
// var minInput = document.getElementById('minutes');
// var secInput = document.getElementById('seconds');

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

clickStart.addEventListener('click', showSecWarning)

function showSecWarning() {
    var secInput = document.forms["intention-form"]["seconds"].value;
    if(isNaN(secInput)) {
    var handleNoWarningSeconds = document.querySelector('#no-warning-seconds')
    handleNoWarningSeconds.style.display = "block";
    }
};






// var handleWarningMessage = document.getElementsByClassName('.warning-message');
// var handleNoWarning = document.getElementsByClassName('.no-warning');






// function showWarning() {
//    if(accomplishInput.value.length === 0) {
//        handleWarningMessage.disabled = true;
//        console.log('nothing is there');
//    }
// }

// if(accomplishInput.value.length === "") {
//     handleNoWarning.display.style = "block";
// }

// get start button
// var minutesInput = document.querySelector('.second-input');

// var minutesObject {
//     input: 1...60;

// }

// add function to only accept integers without e


// var

// funtion numVerify() {
//     if (minutesInput)
// }




// NEW STUFF ATTEMPT:

// var timerPage = document.getElementsByClassName('timer-cat-shell');
// var mainPage = document.getElementsByClassName('cat-shell');
// var mainButton = document.getElementsByClassName('start-button');

// startButton.addEventListener('click', handleStartButton)

// function handleStartButton(e) {
//   clickStartButton.classList.hide('.cat-shell');

//   if(e.target.matches('mainButton')) {
//       e.target.classList.style.display.block('timer-cat-shell');
//       e.target.classList.style.display.none('cat-shell');
//   }
// }
// double check
//document.getElementByClassName("warning-message").style.display = "none";





// if(e.target.matches('ul')) {
    //     e.target.classList.add("blue-border");
    //   }








// SPECS:
// Study: #B3FD78
// Meditate: #C278FD
// Exercise: #FD8078
// Error: #EFB7EC

// OTHER IDEAS:
// idea for h1 to be a home button
// Past Activities default message can be
// a if/else statement

// User Story:
// - User selects category
// - User types information in accomplish-input field
// - User types amount of minutes into input field. Data is verified by validating function.
// - User types amount of seconds into input field. Data is verified by validating function.
// Variables:
// accomplish-input
// minutes-input
// seconds-input
// example: var seconds = document.querySelector('.seconds-input input')
// querySelector
// getElementsByClassName -- then our input fields could all have the same class name and we take/verify that info at once
// querySelectorAll (pg 193)
// need to add in classes for the actual input element for the two variables being targeted.
// class = "minutes"
// class = "seconds"
// FUNCTION:
// (study method that filters function?)
// Idea 1:
// if input.value > 0 || input.value < 59
// return
// else return alert "need to be number"
// (issues with this idea - too many assumptions - not specific enough)
// Idea 2:
// using pages 607 - 610 in JS book
// HTML5 element required = true/false
// Where testing true/false against number value
// function validateRequired () {
//   isEmpty ()
// }
// in the <input> tag for HTML add in required
// object to validate data type
// look into .filter()
// pg 139
// 132 - method: isNan() checks if the value is not a number



// p.124 - could use window.alerg() method to create a dialog box with
// error message that has to be click before continuing with submit

// p.126 could use a document.createElement() method to create a text in red that alerts
// the user that the input is invalid.
