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
