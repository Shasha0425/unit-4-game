$( document ).ready(function() {
    console.log( "ready!" );

    // Generates a random number
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#randomnumber').text(Random);
    console.log(Random)
    //	setting up four random numbers array, total variable and printing the wins & losses variables	
    var RandomNumber = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //random numbers for each gem
    function gemRandomNumber() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 13 + 1);
            RandomNumber.push(num);
        }
    }
    gemRandomNumber();

    //resets the game
    function reset() {
        Random = Math.floor(Math.random()* 69 + 30);
        $('#mnumber').text(Random);
        RandomNumber = [];
        gemRandomNumber();
        total = 0;
        $('#mytotalnumber').text(total);
    }

    //adds the wins to the total
    function handleWins() {
        alert("You won!!!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //adds the losses to the total
    function handleLosses() {
        alert("You lose!!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    //Click event for each gem
    $('#sapphire').on('click', function () {
        total = total + RandomNumber[0];
        $('#mytotalnumber').text(total);

        //sets win/lose conditions
        if (total == Random) {
            handleWins();
        }
        else if (total > Random) {
            handleLosses();
        }
    })

    $('#pink').on('click', function () {
        total = total + RandomNumber[1];
        $('#mytotalnumber').text(total);
        
        //sets win/lose conditions
        if (total == Random) {
            handleWins();
        }
        else if (total > Random) {
            handleLosses();
        }
    })

    $('#ruby').on('click', function () {
        total = total + RandomNumber[2];
        $('#mytotalnumber').text(total);

        //sets win/lose conditions
        if (total == Random) {
            handleWins();
        }
        else if (total > Random) {
            handleLosses();
        }
    })

    $('#purple').on('click', function () {
        total = total + RandomNumber[3];
        $('#mytotalnumber').text(total);

        //sets win/lose conditions
        if (total == Random) {
            handleWins();
        }
        else if (total > Random) {
            handleLosses();
        }
    });

});