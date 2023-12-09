let boxes=document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let darkmode=document.querySelector(".mode");
let body=document.querySelector("body");
let currentMode="light";

let turnO=true;//player O

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
    
  };
  
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
        box.innerText="O";
        turnO=false;
        box.classList.add("zero")
    }else{
        box.innerText="X";
        turnO=true;
        box.classList.add("x");
    }
    box.disabled=true;

    checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.classList.remove("x");
      box.classList.remove("zero")
    }
  };
  





const showWinner=(winner)=>{        //show the winner
    msg.innerHTML=`We found the winner ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};


const checkWinner=()=>{         //check all winning pattern
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        
        if(val1 !="" && val2 !="" && val3 !=""){
        if(val1==val2 && val2==val3){
            console.log(`winner`,val1);
            showWinner(val1);
          
        }
    }
    }
};


newGameBtn.addEventListener("click", resetGame);

darkmode.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
