$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;
    var numberOptions = [];

    function resetthegame() {

        for (i = 0; i < 4; i++) {
            numberOptions[i] = Math.floor(Math.random() * (12 - 1 + 1) + 1);
        }

        $("#bluecrystal").attr("data-crystalvalue", numberOptions[0]);
        $("#yellowcrystal").attr("data-crystalvalue", numberOptions[1]);
        $("#pinkcrystal").attr("data-crystalvalue", numberOptions[2]);
        $("#greencrystal").attr("data-crystalvalue", numberOptions[3]);
        counter = 0;
        $("#totalscore").text(counter);
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        $("#number-to-guess").text(targetNumber);

    }
    resetthegame();

    $("#wins").html("wins:" + wins);
    $("#losses").html("losses:" + losses);


    $(".crystal-image").on("click", function () {


        var crystalValue = ($(this).attr("data-crystalvalue"));

        crystalValue = parseInt(crystalValue);

        counter += crystalValue;
        $("#totalscore").text(counter);

        if (counter === targetNumber) {
            wins++;
            resetthegame();

        } else if (counter >= targetNumber) {
            losses++;
            resetthegame();

        }

        $("#wins").html("wins:" + wins);
        $("#losses").html("losses:" + losses);

    });

});