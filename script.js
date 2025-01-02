let boxes = document.querySelectorAll(".small_box");
let win = document.querySelector(".win");
let heading = document.querySelector(".heading");
let display_winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let reset_button = document.querySelector("#reset_button");
let new_button = document.querySelector(".new_button");

let value = "O";
let winner;
winnerComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const checkWinner = ()=>{
    for(comb of winnerComb)
    {
        const [a,b,c] = comb;  // comb[0]=a,.......
        if(boxes[a].innerHTML !=="" &&
           boxes[a].innerHTML === boxes[b].innerHTML &&
           boxes[b].innerHTML === boxes[c].innerHTML
        )
        {
            winner = boxes[a].innerHTML;
            boxes[a].style.color = "red";
            boxes[b].style.color = "red";
            boxes[c].style.color = "red";

            for(let box of boxes)
            {
                box.disabled = true;
            }
            showWinner(); 
            return;
        }
    }

}

const showWinner = () => {
    win.style.display = "block";
    display_winner.innerHTML = `Congratulations!! Winner is ${winner}`;
    heading.innerHTML = "";
    reset.style.display = "none"
}

const playGame = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", ()=>{
            if(box.innerHTML === "")
            {
                if(value==="O")
                    {
                        box.innerHTML = "O";
                        value = "X";
                    
                    }
                    else
                    {
                        box.innerHTML = "X";
                        value = "O";
                    
                    }
            }
    
            checkWinner();
             
        })
    })
}

playGame();

const resetGame = () => {
    value = "O";
    win.style.display = "none";
    reset.style.display = "flex";
    heading.innerHTML = "<h1>Tic Tac Toe</h1>";
    
    for(box of boxes)
    {
        box.innerHTML = "";
        box.style.color = "";
        box.disabled = false;
    }

    winner = null;

}

reset_button.addEventListener("click", resetGame);

new_button.addEventListener("click", resetGame);