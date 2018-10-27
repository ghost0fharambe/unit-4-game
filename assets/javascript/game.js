//Counters to zero
var wins = 0;
var losses = 0;
var score = 0;

//Empty variable to be set by function
var bagSize = "";

//Array holding crystal vals
var crystalValues = [1, 3, 5, 10]

//jquery placeholder vars
var rubyOne = $("#ruby-1");
var diamond = $("#diamond");
var agate = $("#agate");
var rubyTwo = $("#ruby-2");
var winText = $("#wins");
var loseText = $("#losses");
var scoreText = $("#score-number");
bagSizeText = $("#bag-number");

//Function to randomize and set values
function setCrystalValue() {

    function shuffle(array) {

        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    shuffle(crystalValues);

    rubyOne.attr("data-value", crystalValues[0]);
    diamond.attr("data-value", crystalValues[1]);
    agate.attr("data-value", crystalValues[2]);
    rubyTwo.attr("data-value", crystalValues[3]);

};


//populates empty variable above
function populateBagSize() {

    //for (var i = 1; i <= 10; i++) {

    bagSize = Math.round(Math.random() * 50 + 10);

    //bagSizeArray.push(bagSizes);

    console.log(bagSize);
    //}

};

populateBagSize();

setCrystalValue();

bagSizeText.text(" " + bagSize + " ")
//bagSizeArray[Math.round(Math.random() * bagSizeArray.length)] + " ");
