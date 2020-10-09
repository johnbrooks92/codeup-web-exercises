(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            var circleArea = this.getArea();
            if (doRounding) {
                circleArea = Math.round(circleArea);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };


    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();