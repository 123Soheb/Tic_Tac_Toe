let boxs=document.querySelectorAll(".box");
console.dir(boxs);
let restbut=document.querySelector(".reset");
let newbut=document.querySelector(".newbutton");
let hide12=document.querySelector(".mess");
let message=document.querySelector("#message");

 
let turnO =true;
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


  boxs.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        box.style.color="red";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
        box.style.color="yellow";
      }
      console.log("hello")
      box.disabled = true;
      count++;
      // restbut.disabled =true;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });


  const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
        return true;
      }
    }
  }
};


  const showwinner=(pos1Val)=>{
    message.innerText=`Congratulation, Winner is ${pos1Val}`;
    hide12.classList.remove("mess");
    console.log("winner console");
    disableBoxes();
  }
  const disableBoxes = () => {
    for (let box of boxs) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxs) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    hide12.classList.add("mess");
    console.log("hide add")
  };


  const gameDraw = () => {
    message.innerText = `Game was a Draw.`;
    hide12.classList.remove("mess");
    disableBoxes();
  };

restbut.addEventListener("click", resetGame);
newbut.addEventListener("click", resetGame);
  