//Countdown Timer for webpage. Will begin at 10 and end at 1 with Blast Off following
function startCountdown() {
    var count = 10;

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;
    //Sets a timer to run code based off milliseconds
    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        //Decreases count by one
        count = count - 1;
        //Waits  1 second before displaying results
    }, 1000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  2 second before displaying results
    }, 2000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  3 second before displaying results
    }, 3000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  4 second before displaying results
    }, 4000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  5 second before displaying results
    }, 5000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  6 second before displaying results
    }, 6000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  7 second before displaying results
    }, 7000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  8 second before displaying results
    }, 8000);

    setTimeout(function () {
        //after 1 sec, will run code in here
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        //Waits  9 second before displaying results
    }, 9000);

    setTimeout(function () {
        //after 1 sec, will print "Blast Off!!!"
        document.getElementById("countdownTimer").innerHTML = "Blast Off!!!";
        //Waits  10 seconds before displaying results
    }, 10000);
}