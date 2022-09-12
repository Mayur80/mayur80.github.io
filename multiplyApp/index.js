const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}
const scoreE = document.getElementById("score");
scoreE.innerText = `score: ${score}`;
const questionE = document.getElementById("question");

const formE = document.getElementById("form");


const inputE = document.getElementById("input");
questionE.innerText = `what is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;



formE.addEventListener("submit", ()=>{
const userAns = +inputE.value;
    if(userAns === correctAns){
        score++;
        updatelocalStorage();
    }
    else{
        score--;
        updatelocalStorage();
    }

});

function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}