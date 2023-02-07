"use strict";
var name1 = prompt("Enter your name");
while (name1 === ""){
    name1 = prompt("your name can't be empty,Enter your name");
}
var gend = prompt("Enter your gender");
while(gend != "male" && gend !="female"){
    gend = prompt("your gender should be either (male or female),Enter your gender");
}
var age = prompt("Enter your age");
while(age <=0){
    alert("age can't equal or less than a zero")
    age = prompt("age is invalid,enter your age");
}
var doUwantWelcome = confirm("confirm if you want to skip the welcoming message.");
if(doUwantWelcome == true){
    if(gend == "male"){
        alert(`welcome Mr.${name1}`);
    }else if(gend == "female"){
        alert(`welcome Ms.${name1}`);
    }else{
        alert(`welcome ${name1}`);
    }
}

let question1 = prompt("is your goal to have more achievments in your life? -answer with yes or no-");
let question2 = prompt("do you know your goals for at least 6 months from now?-answer with yes or no-");
let question3 = prompt("Are you ready to real commitment and self discipline to be a better you?-answer with yes or no-");

function checkTheAnswer(enterArray){
    let userAnswerLowerCase;
    for(let i=0 ; i<enterArray.length ; i++){
        userAnswerLowerCase = enterArray[i].toLowerCase().trim();
        if(userAnswerLowerCase === "yes" || userAnswerLowerCase === "no"){
            enterArray[i]=userAnswerLowerCase;
        }else{
            enterArray[i]="invalid";
        }   
    }
    return enterArray;
}

let userAnswer =[question1,question2,question3];

checkTheAnswer(userAnswer);

function printArrays(arr){
    for(let i=0 ; i<arr.length;i++){
        console.log(arr[i]);
    }
}

printArrays(userAnswer);
