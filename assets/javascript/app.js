//point variables and timer variable
var questionsRight = 0;
var questionsWrong = 0; 
var unansweredQuestions = 0;
var timer = 60;
//bolean set to false. When true, the timer at the top of the questions screen will begin to tick down
var timerStart = false;
console.log(timerStart);

//set game and score screen to inital value of hide
$("#gamePage").hide();
$("#scorePage").hide();

// on click start game button, show the game page, hide the initial page
$("#startGame").on("click", function() {
    $("#startPage").hide();
    $("#gamePage").show();
    timerStart = true;              
    if (timerStart == true) {
        var timerId = setInterval(function() {
            timer--;
            $("#timer").text(timer);
            if(timer === 0) {
                alert("Times Up!");
                //function with logic for finding out score
                var countChecked = function() {
                    
                    for(var i = 1; i <=10; i++){
                    
                    if ($("input[name=q" + i + "]:checked").val() == "true") {
                        questionsRight++;
                    } else if (($("input[name=q" + i + "]:checked").val()) == "false") {
                        questionsWrong++;
                    } else if (($("input[name=q" + i + "]"))) {
                        unansweredQuestions ++;
                    }

                }
                };
                countChecked();
                $("#gamePage").hide();
                $("#scorePage").show();
                $("#correctAnswers").text(questionsRight);
                $("#wrongAnswers").text(questionsWrong);
                $("#unansweredQuestions").text(unansweredQuestions);
                timerStart = false;
            }       
        }, 
    1000);}
});


//timer setup to hide game page, show score page when ran up

//compare user input to answer

// if correct, ++ score, wrong ++wrong

// create timer

// 