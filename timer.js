// jshint esversion: 7

class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        // 'callbacks' is an optional parameter

        // Capture elements and store them as variables in class instance
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        // Conditional block allowing callbacks to be an optional parameter
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        // Add event listeners for every element
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        // check for optional callback parameter to run when start is triggered
        if (this.onStart) {
            // Pass in the initial time remaining
            this.onStart(this.timeRemaining);
        }

        // Call this.tick() manually first because we have to 
        // wait 1s for setInterval to trigger this.tick() first
        this.tick();

        // Assign timer interval to the class instance
        this.interval = setInterval(this.tick, 10); // updated to tick every 10ms
    };

    pause = () => {
        // Clear Interval method resets the setInterval mthod
        clearInterval(this.interval);
    };

    tick = () => {
        // If the seconds remaining is 0 or less, then stop
        if (this.timeRemaining <= 0) {
            // Then stop the timer
            this.pause();

            // Run onComplete callback when finished
            if (this.onComplete) {
                this.onComplete();
            }

        } else {
            // Update durationInput (do a tick)
            this.timeRemaining = this.timeRemaining - 0.01; // update to tick every 10ms

            // Run onTick callback while ticking
            if (this.onTick) {
                // Pass in timeRemaining value to help determine offset at tick
                this.onTick(this.timeRemaining);
            }

        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2); // round to 2 dec. places for representing duration in text box
    };
}