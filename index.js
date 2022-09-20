var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Enter your name ");
console.log("Welcome to the quiz " + userName);
console.log("")

function askUser(question, answer) {

    console.log("")
    var userData = readlineSync.question(question);
    console.log("")

    if (userData.toLowerCase() === answer.toLowerCase()) {
        console.log(userData + " is the RIGHT answer.");
        score = score + 2;
    } else {
        console.log(userData + " is the WRONG answer.")
        score = score - 1;
    }
    console.log("")
    console.log("Your score is " + score);
    console.log("---------------")
}




var myQuestions = [{
    question: "1. What is my full name? ",
    answer: "Akash Sarkar"
}, {
    question: "2. What is my age? ",
    answer: "22"
}, {
    question: "3. Where do I live? ",
    answer: "Tinsukia"
}, {
    question: "4. What's my favorite anime show? ",
    answer: "Naruto"
}, {
    question: "5. Where is my favourite dish ",
    answer: "Biryani"
}, {
    question: "6. What am I currently learning ",
    answer: "Coding"
}];


for (i = 0; i < myQuestions.length; i++) {
    askUser(myQuestions[i].question, myQuestions[i].answer);

}

console.log("Your total score is " + score);


var highScores = [{
    name: "Rohit",
    scored: 10
}, {
    name: "Ankit",
    scored: 8
}]

for (i = 0; i < 1; i++) {

    if (score > highScores[i].scored) {
        console.log("Congrats you are the new highest scorer");
    } else {
        console.log("The highest score is " + highScores[i].scored);
    }
    console.log("---------------");
    console.log("THANK YOU");
}