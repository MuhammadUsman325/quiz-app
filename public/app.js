

var questions = [
    {

        "question": "1. How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "2. How to create variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },

    {

        "question": "3. Which of the following variable types does not exist in JavaScript?",
        "option1": "double",
        "option2": "boolean",
        "option3": "number",
        "option4": "object",
        "answer": "1"
    },
    {

        "question": "4. How to create function?",
        "option1": "Function(){}",
        "option2": "function.create()",
        "option3": "function(){}",
        "option4": "function{}",
        "answer": "3"
    },
    {

        "question": "5. How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "6. What is javascript",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "codding language",
        "option4": "web language",
        "answer": "2"
    },
    {

        "question": "7. How to write an IF statement in JavaScript?",
        "option1": "if i == 5 then",
        "option2": "if i != 5 then",
        "option3": "if (x==5)",
        "option4": "if i = 5",
        "answer": "3"
    },
    {

        "question": "8. What is the correct JavaScript syntax to insert a comment that can span multiple lines?",
        "option1": "// This comment has mor than one line *//",
        "option2": "/This comment has mor than one line /",
        "option3": "/* This comment has mor than one line */",
        "option4": "// This comment has mor than one line //",
        "answer": "3"
    },
    {

        "question": "9. Which is NOT a way to create a loop in javascript?",
        "option1": "repeat(...){ }",
        "option2": "while (…) { }",
        "option3": "do { } while(…)",
        "option4": "for (…) { }",
        "answer": "1"
    },
    {

        "question": "10. What character ends a javascript statement? ",
        "option1": "An exclamation mark “!”.",
        "option2": "A period “.”.",
        "option3": "A colon “:”.",
        "option4": "A semicolon“;”.",
        "answer": "4"
    }
    
    

    
    
];


var question = document.getElementById('question');

var question1 = document.getElementById('question1');

var question2 = document.getElementById('question2');

var question3 = document.getElementById('question3');

var question4 = document.getElementById('question4');

question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;

var load = 0;
var correct = 0;
window.onload = function timer(){
    var timer = document.getElementById("timer");
    var min = 4;
    var sec = 59;
    var timeStart = setInterval(function(){
    timer.innerHTML ="Time left ="+"  "+ min + ":" + sec;
    sec--
    if(min<0){
        this.clearInterval(timerStart)
        alert("time out");
        score = correct * 10;
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("score").innerHTML = "Your Score is"+" " + score + " %";
    }
    else if( sec === 0){
        min--;
        sec = 59;

    }
    else if(sec < 10){
        sec = "0" + sec;
    }
},1000)
}
function next(){
    var val = document.querySelector("input[name = 'option']:checked");
    if (val === null){
        alert("Select anyone");
    }
    else{
        if(questions[load].answer === val.value){
            
            correct++;
        }
        else{
        
        }
        if(questions.length-1 === load){
            var score = correct * 10;
            document.getElementById("quizContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
            var congrt = document.getElementById("score").innerHTML = "Your Score is"+" " + score + " %";
            
         

            if(score >= 70){
            
                  
                
                 document.write("<div id='us'><center><h1>Congrats! You Are Pass!</h1><br>" +congrt +"</center></div>");
                                
            }
            else{
                document.write("<center>"+"<h1> You Are Fail</h1>" +"<br>"+ congrt +"</center>");
            }
        }
        else{
            document.querySelector("input[name = 'option']:checked").checked = false;
            load++;
            
            
            question.innerHTML = questions[load].question;
            option1.innerHTML = questions[load].option1;
            option2.innerHTML = questions[load].option2;
            option3.innerHTML = questions[load].option3;
            option4.innerHTML = questions[load].option4;
           
        }
    }
   

    }