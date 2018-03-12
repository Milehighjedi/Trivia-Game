var questions = [{
    question: "Who was Bruce Lee's Wing Chun teacher?",
    choices: ["Master Toddy", "Yip Man", "Chuck Norris", "Martin Yan"],
    correctAnswer: 1
}, {
    question: "When he began learning kung fu, why wouldn't other children train with him?",
    choices: ["He wasn't old enough", "He wasn't wealthy", "He wasn't of 100% Chinese ansestry", "He didn't speak Manderin"],
    correctAnswer: 2
}, {
    question: "What other activity did he excel at?",
    choices: ["Soccer", "Sumo", "Ballroom Dancing", "Cooking"],
    correctAnswer: 2
}, {
    question: "What did he name the martial art that he created?",
    choices: ["Jeet Kune Do", "Harikari", "Bokator", "Bakom"],
    correctAnswer: 0
}, {
    question: "What movie did Bruce Lee die during the making of?",
    choices: ["The Iron Fist", "Enter the Dragon", "The Drunken Master", "Game of Death"],
    correctAnswer: 3
}, {
    question: "What did he study at The University of Washington?",
    choices: ["Philosophy", "Psychology", "Chemistry", "Drama"],
    correctAnswer: 3
}, {
    question: "How old was Bruce Lee when he died?",
    choices: ["45", "28", "32", "51"],
    correctAnswer: 2
}, {
    question: "Who was not a student of Bruce Lee?",
    choices: ["James Coburn", "Jackie Chan", "Kareem Abdul-Jabbar", "Steve McQueen"],
    correctAnswer: 1
}, {
    question: "He was born in the year, the day, and the hour of what chinese zodiac symbol?",
    choices: ["Lion", "Rooster", "Dragon", "Stag"],
    correctAnswer: 2
}, {
    question: "What T.V. show did he star on as Kato?",
    choices: ["Mission: Imposible", "The Green Hornet", "Kung Fu", "Miami Vice"],
    correctAnswer: 1
}, {
    question: "What was his family's nickname for him?",
    choices: ["Little Phoenix", "Little Dragon", "Little King", "Little Fist"],
    correctAnswer: 0
}, {
    question: "What song did Bruce train to?",
    choices: ["The Mission Impossible Theme", "Eye of the Tiger", "Chariots of Fire", "The 1812 Overture"],
    correctAnswer: 0
}, {
    question: "What caused him to fail a US Army physical?",
    choices: ["A bad back", "A knee injury", "Poor vision", "Not being a citizen"],
    correctAnswer: 2
}, {
    question: "Who's character did Bruce kill in Way of the Dragon?",
    choices: ["Chuck Norris", "Jackie Chan", "Kareem Abdul-Jabar", "Pat Morita"],
    correctAnswer: 0
}, {
    question: "How much did Bruce charge per hour for private lessons in the 60s?",
    choices: ["$0", "$100", "$1000", "$52"],
    correctAnswer: 1
}, {
    question: "What was Bruce's father's profession?",
    choices: ["Martial Artist", "Doctor", "Teacher", "Singer"],
    correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var Over = false;





$(document).ready(function () {


    displayCurrentQuestion();
    $(this).find(".message").hide();


    $(this).find(".submit").on("click", function () {
       
        //setInterval(function(currentQuestion){
            //currentQuestion++;
            //}, 15000);

        if (!Over) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".message").text("Please select an answer");
                $(document).find(".message").show();
            } else {

                $(document).find(".message").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".submit").text("Play Again?");
                    Over = true;
                }
            }
        } else { 
            Over = false;
            $(document).find(".submit").text("Submit");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {



    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceGroup = $(document).find(".quizContainer > .choiceGroup");
    var numChoices = questions[currentQuestion].choices.length;

    
    $(questionClass).text(question);

    
    $(choiceGroup).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceGroup);
    }
}





function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}