//point variables and timer variable
var counter = 0;
var questionsRight = 0;
var questionsWrong = 0;
var unansweredQuestions = 0;
var timer = 5;
var timerStart = false;

//set game and score screen to inital value of hide
$("#gamePage").hide();
$("#scorePage").hide();

// on click start game button, show the game page, hide the initial page
$("#startGame").on("click", function() {
    $("#startPage").hide();
    $("#gamePage").show();
    timerStart === true;
});


//timer setup to hide game page, show score page when ran up
//why is timer not starting?
if(timerStart === true) {
    var timerId = setInterval(function() {
        timer--;
        $("#timer").text(timer);
        if(timer === 0) {
            alert("Times Up!");
            $("#gamePage").hide();
            $("#scorePage").show();
            $("#correctAnswers").text(questionsRight);
            $("#wrongAnswers").text(questionsWrong);
            $("#unansweredQuestions").text(unansweredQuestions);
    }
}, 1000); }
   

//compare user input to answer

// if correct, ++ score, wrong ++wrong

// create timer

// 