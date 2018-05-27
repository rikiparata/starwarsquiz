function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;

    if (question1 == "Kashyyyk") {
        correct++;
    }if (question2 == "Adventures of Luke Starkiller") {
        correct++;
    }if (question3 == "Revenge Of The Sith") {
        correct++;
    }if (question4 == "Wilhelm Scream") {
        correct++;
    }if (question5 == "Wampa") {
        correct++;
    }if (question6 == "Jango Fett") {
        correct++;
    }if (question7 == "Cloud City") {
        correct++;
    }if (question8 == "Mace Windu") {
        correct++;
    }if (question9 == "Darth Tyranus") {
        correct++;
    }if (question10 == "Never Seen Again") {
        correct++;
    }

    var message = ["May the force be with you!", "I've got an okay feeling about this!", "Noooooo!"];
    var pictures = ["win.gif", "meh.gif", "lose.gif"];
    var range;
    if (correct < 4) {
        range = 2;
    } if (correct >= 4 && correct < 7) {
        range = 1;
    } if (correct >= 7) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";

    document.getElementById("picture").src = pictures[range];
}