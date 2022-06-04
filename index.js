// jshint esversion: 7

// Initialize our variables bound to our DOM elements
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

// Select the <circle /> SVG Element inside of our index.html file
const circle = document.querySelector('circle');

// Select the <circle /> element's perimeter
const perimeter = circle.getAttribute('r') * 2 * Math.PI;

// Add the 'stroke-dasharray' SVG attribute to <circle />
circle.setAttribute('stroke-dasharray', perimeter);

// Initialize accumulator variable in order to modify 'stroke-dashoffset' attribute
// using our callbacks that we add to the Timer class
let currentOffset = 0;

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
        // Set our SVG attribute
        circle.setAttribute('stroke-dashoffset', currentOffset);

        // And then subtract from the current offset by 1 pixel
        currentOffset = currentOffset - 1;
    },
    onComplete() {
        //
        console.log('Timer has completed');
    }
});
