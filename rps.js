let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option=["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame= () => {
    console.log("game was draw");
    msg.innerHTML="Game was draw,play again!!";
    msg.style.backgroundColor="#081b31";
}

const showinner = (userWin,userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        console.log("you win");
        msg.innerHTML=`You win!!!!🥳🥳 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        compScorePara.innerHTML=computerScore;
        console.log("you lose");
        msg.innerHTML=`You lose!!😢😞 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice -> moular function
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
          userWin = compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
          userWin = compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

