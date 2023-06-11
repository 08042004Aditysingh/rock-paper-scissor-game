const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let finalResult;
possibleChoices.forEach(possibleChoice =>{possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

 })});

 function  generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1//or use possibleChoices.length
    console.log(randomNumber);
    if(randomNumber===1){
        computerChoice='rock';
    }
    if(randomNumber===2){
        computerChoice='paper';
    }
    if(randomNumber===3){
        computerChoice='scissor';
    }

    computerChoiceDisplay.innerHTML= computerChoice;

 }

 function getResult(){
    if(userChoice===computerChoice){
        finalResult="It's a draw!";
    }
    else if(userChoice==='rock'&&computerChoice==='paper'){
        finalResult="You Lost";
    }
    else if(userChoice==='rock'&&computerChoice==='scissor'){
        finalResult="You Win";
    }
    else if(userChoice==='paper'&&computerChoice==='rock'){
        finalResult="You Win";
    }
    else if(userChoice==='paper'&&computerChoice==='scissor'){
        finalResult="You Lost";
    }
    else if(userChoice==='scissor'&&computerChoice==='paper'){
        finalResult="You Win";
    }
    else if(userChoice==='scissor'&&computerChoice==='rock'){
        finalResult="You Lost";
    }
    resultDisplay.innerHTML=finalResult;

 }



