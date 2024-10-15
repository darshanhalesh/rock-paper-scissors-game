let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscores =document.querySelector("#user-score");
const compscores =document.querySelector("#comp-score");

const getcompchoice = (playgame) =>{
    const options =["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx]

}
const drawgame= ()=>{
    console.log("game was draw");
    msg.innerHTML="game draw play again";
    msg.style.backgroundColor="#081b31";
    
}
const showwinner =(userwin,userchoice, compchoice) =>{
    if(userwin){
        userscore++
        userscores.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscores.innerText=compscore
        console.log("you lose")
        msg.innerText=`you lost the game ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame = (userchoice) =>{
    console.log("user choice =",userchoice);
    //generate comp choice
    const compchoice = getcompchoice();
    console.log("comp choice =",compchoice)
    
if(userchoice === compchoice){
    drawgame();
}
else{
    let userwin = true;
    if(userchoice === "rock"){
        // left choices paper scissiors
        userwin = compchoice === "paper" ? false : true;

    }else if(userchoice === "paper"){
  // left choices paper scissiors  
  userwin = compchoice ==="scissors" ? false : true;     

    }
    else{
        userwin = compchoice === "rock" ? false: true;
    }
    showwinner(userwin,userchoice, compchoice);
}
}
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
     const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
