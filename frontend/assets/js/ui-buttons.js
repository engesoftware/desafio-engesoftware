var UIButtons = function () {
	"use strict";
    //function to initiate LaddaButtons
    var runLeddaButtons = function () {
        // Bind normal buttons
        Ladda.bind('.ladda-button', {
            timeout: 2000
        });
        // Bind progress buttons and simulate loading progress
        Ladda.bind('.progress-demo button', {
            callback: function (instance) {
                var progress = 0;
                var interval = setInterval(function () {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance.setProgress(progress);
                    if (progress === 1) {
                        instance.stop();
                        clearInterval(interval);
                    }
                }, 200);
            }
        });
        // You can control loading explicitly using the JavaScript API
        // as outlined below:
        // var l = Ladda.create( document.querySelector( 'button' ) );
        // l.start();
        // l.stop();
        // l.toggle();
        // l.isLoading();
        // l.setProgress( 0-1 );
    };
    var runSwitchButtons = function () {
        $("input[type='checkbox'].make-switch").bootstrapSwitch();
    };
    return {
        //main function to initiate template pages
        init: function () {
            runLeddaButtons();
            runSwitchButtons();
        }
    };
}();