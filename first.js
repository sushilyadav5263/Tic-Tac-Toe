let boxes = document.querySelectorAll(".box");
turnO = true;

const winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

   boxes.forEach ((box) =>{
    box.addEventListener("click",() => {
     if(box.innerText !== "")
        return;
    box.innerText = turnO ? "X":"O";
      turnO = !turnO;
      checkWinner();
    });
 });
 function checkWinner(){
    const boxValue = [...boxes].map((box) => box.innerText);
    for( let pattern of winnerPattern){
        const [a,b,c] = pattern;
        if(
            boxValue[a]&& 
            boxValue[a] === boxValue[b] &&
             boxValue[a] === boxValue[c]
     ) {
        alert(`player ${boxValue[a]} win!🎉`);
        resetGame();
        return;
     }
    }
    if( boxValue.every((val) => val !== "")){
        alert("it's a draw!");
        resetGame();
    }
 }
  function resetGame(){
    boxes.forEach((box) => (box.innerText =""));
    turnO = true;
  }


  