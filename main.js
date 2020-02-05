// /IDEAL FN for BUTTONS RESPONSE
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
    clickStudy.innerHTML =`
    <button class="activity-button study-button study-active">
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

// SPECS:
// Study: #B3FD78
// Meditate: #C278FD
// Exercise: #FD8078
// Error: #EFB7EC

// OTHER IDEAS:
// idea for h1 to be a home button
// Past Activities default message can be 
// a if/else statement
