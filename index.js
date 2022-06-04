// jshint esversion: 7

// Initialize our variables bound to our DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// Initialize our class
// When we initialize our class we want to pass in a fourth extra parameter
// which is an object containing three methods we want to call when an event occurs
// these callbacks are called onStart, onTick, onComplete
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        //
        console.log('Timer started');
    },
    onTick() {
        //
        console.log('Timer just ticked down');
    },
    onComplete() {
        //
        console.log('Timer has completed');
    }
});
