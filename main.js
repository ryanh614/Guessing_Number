var ramdomNum = Math.floor(Math.random() * 20); 

console.log(ramdomNum);

// var userNum = document.forms["guess"]["userNum"].value;
var userNum = document.getElementById("number").value;
    
function check() {
    if (userNum == ramdomNum) {
        alert("You win!");
    } else if (userNum > ramdomNum) {
        alert("Too high!");
    } else if (userNum < ramdomNum) {
        alert("Too low!");
    }
}

