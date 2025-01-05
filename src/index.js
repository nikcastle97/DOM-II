// console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector(`#launchButton`);
const confirmButton = document.querySelector(`#confirmButton`);
const cancelButton = document.querySelector(`#cancelButton`);

// B- MESSAGES
const successMessage = document.querySelector(`.success`);
const failureMessage = document.querySelector(`.failure`);

// C- MODAL
const modal = document.querySelector(`.modal`)


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
launchButton.onclick = () => {
  // console.log(`Oops! What happened to the HTML event..?`)
}
//  B- The DOM's element.onclick attribute
//  C- element.addEventListener('click', callback)
// launchButton.addEventListener(`click`, function(evt) {
//   console.log(`
//     Event Type: ${evt.type}
//     Event Target: ${evt.target.nodeName}

//     Event Info:
//     `, evt);
// })

Array.from(document.links).forEach(link => {
  link.addEventListener(`click`, E => {
    console.log(`The "${E.target.textContent}" link is deprectiated. Pay 5 Bitcoin to uprgrade, here: >;p`);
    E.preventDefault();
  })
})


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
/**
 * (:1:) "Function Declaration" => "function" + (functionVariableName)
 * :::HOISTED (does not stay where it is!!!)
 *
 * (:2:) "Function Expression" => "const functionName = () => {}"
 * :::NOT HOISTED (stays where it is!!!)
 *
 */

function launch() {
modal.classList.remove(`off`)
successMessage.classList.add(`off`)
failureMessage.classList.add(`off`)
}
launchButton.addEventListener(`click`, launch)

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm() {
  modal.classList.add(`off`)
  successMessage.classList.remove(`off`)
}
confirmButton.addEventListener(`click`, confirm)


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
  modal.classList.add(`off`)
  failureMessage.classList.remove(`off`)
}
cancelButton.addEventListener(`click`, cancel)


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(event) {
  if (event.key === `Escape`) {
    modal.classList.add(`off`)
    alert(`...postponed launch`)
  }
}
document.addEventListener(`keydown`, escKey)


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
// document
//   .querySelectorAll(`*`)
//   .forEach(element => element.addEventListener(`click`, event => {
//     console.log(`🎯 Target:         `, event.target)
//     console.log(`🧭 Current Target: `, event.currentTarget)
//     console.log(`\n`)
//   }))


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function toggleModal(e) {
  if (e.key !== `Backspace`) {
    modal.classList.toggle(`off`)
  }
}
document.addEventListener(`keydown`, toggleModal)

function killReports(e) {
  if (e.key === `Backspace`) {
    successMessage.classList.add(`off`)
    failureMessage.classList.add(`off`)
  }
}
document.addEventListener(`keydown`, killReports)


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
function recordLocation(e) {
  let x = e.clientX;
  let y = e.clientY;
  console.log(
    `X Coordinates: `, `${x},`,
    `Y coordinates: `, `${y}`)
}
document.addEventListener(`mousemove`, recordLocation)
