//grid control=============================================================================================================
// grid is a 2d array that will correlate with the cells. 
//initialize grid
var grid = [ [0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9] ]
//function that will make the grid empty/initialize an empty grid
function emptyGrid () {
    for(i=0; i<10; i++){
        for(j=0; j<10; j++) {
            grid[i][j] = 0;
            //for testing
            console.log(grid[i][j]);
        }
    }
}
//player control==========================================================================================================
let currentPlayer = 1;
let restingPlayer = 2;
let gameOver = 0;
document.getElementById("infoDisplay").innerHTML = "It is Player: 1's turn";
//switches the control of the board and updates the display, works
function switchPlayers(){
    if(currentPlayer === 1){
        currentPlayer = 2;
        restingPlayer = 1;
    }
    else {
        currentPlayer = 1;
        restingPlayer = 2;
    }
    document.getElementById("infoDisplay").innerHTML = "It is Player: " + currentPlayer + "'s turn";
}
emptyGrid();//called to start the game
//sanity check
console.log("grid is empty")
//main flow, here once page loads, will 'freeze' when game ends
document.body.onclick = function(element) {
    //alert('clicked')
    element = element.target;
    //console.log(element.classList.contains('col-0'))
    if(element.classList.contains('col-0') === true) {
        if(iscolFull(0) === false) {
            //alert('hit col1')
            drop(0,currentPlayer);
            testingc1();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-1') === true) {
        if(iscolFull(1) === false) {
            //alert('hit col2')
            drop(1,currentPlayer);
            testingc2();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }              
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-2') === true) {
        if(iscolFull(2) === false) {
            //alert('hit col3')
            drop(2,currentPlayer);
            testingc3()
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);                
            }
            else{
                switchPlayers(); 
            }           
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-3') === true) {
        if(iscolFull(3) === false) {
            //alert('hit col4')
            drop(3,currentPlayer);
            testingc4();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-4') === true) {
        if(iscolFull(4) === false) {
            //alert('hit col5')
            drop(4,currentPlayer);
            testingc5();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-5') === true) {
        if(iscolFull(5) === false) {
            //alert('hit col6')
            drop(5,currentPlayer);
            testingc6();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-6') === true) {
        if(iscolFull(6) === false) {
            //alert('hit col7')
            drop(6,currentPlayer);
            testingc7();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-7') === true) {
        if(iscolFull(7) === false) {
            //alert('hit col7')
            drop(7,currentPlayer);
            testingc7();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-8') === true) {
        if(iscolFull(8) === false) {
            //alert('hit col7')
            drop(8,currentPlayer);
            testingc7();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else if(element.classList.contains('col-9') === true) {
        if(iscolFull(9) === false) {
            //alert('hit col7')
            drop(9,currentPlayer);
            testingc7();
            if(winCondition(currentPlayer) === true){
                console.log("END")
                //alert("GAME OVER, Player" + currentPlayer +"won")
                //somehow freeze/break loop
                victory(currentPlayer);
            }
            else{
                switchPlayers(); 
            }
            
        }
        else {
            alert('This Column Is Full!')
        }
    }
    else {
        //alert('not on grid')
    }
    drawCheck();
}
//works
function fill(row,col){
    let spot = document.getElementsByClassName("cell-" + row + col);
    console.log(spot.length);
    if(currentPlayer === 1){
        spot[0].style.backgroundColor = "red";
    }
    else{
        spot[0].style.backgroundColor = "blue";
    }
}
//works
function drop(col,player){
    if(gameOver === 0){
        for(let i=9; i>=0;i--){
            if(grid[i][col] === 0){
                grid[i][col] = player;
                console.log(i,col,grid[i][col])
                fill(i,col);
                return(true);          
            }
        }
        return(false);
    }
}
//works now
function iscolFull(n) {
    for(let i=9; i>=0;i--){
        if(grid[i][n] === 0) {
            return(false);
        }
    }
    return(true);
}

//checking for win
function winCondition(player){
    //empty as I define the helpers
    return (verticalWin(player) || horizontalWin(player) || uprightWin(player) || downrightWin(player));
}
//the helpers
//works
function verticalWin(player){
    for(let i=9;i>=3;i--){
        for(let j=0;j<=9;j++){
            if(grid[i][j] === player && grid[i-1][j] === player && grid[i-2][j] === player && grid[i-3][j] === player){
                return(true)
            }
        }
    }
    return(false)
}
//works
function horizontalWin(player){
    for(let i=9;i>=0;i--){
        for(let j=0;j<=6;j++){
            if(grid[i][j] === player && grid[i][j+1] === player && grid[i][j+2] === player && grid[i][j+3] === player){
                return(true)
            }
        }
    }
    return(false)
}
//works
function uprightWin(player){
    for(let i=9;i>=3;i--){
        for(let j=0;j<=6;j++){
            if(grid[i][j] === player && grid[i-1][j+1] === player && grid[i-2][j+2] === player && grid[i-3][j+3] === player){
                return(true)
            }
        }
    }
    return(false)
}
//works
function downrightWin(player){
    for(let i=6;i>=0;i--){
        for(let j=0;j<=6;j++){
            if(grid[i][j] === player && grid[i+1][j+1] === player && grid[i+2][j+2] === player && grid[i+3][j+3] === player){
                return(true)
            }
        }
    }
    return(false)
}

//win event handling
function victory(player){
    alert("This is the victory alert, player " + player +" has won");
    document.getElementById("infoDisplay").innerHTML = "Player " + player + " has won! Click refresh for a new game";
    gameOver = 1;
}

//draw event handling
function drawCheck(){
    let isDraw = 1;
    for(i=0; i<10; i++){
        for(j=0; j<10; j++) {
            if(grid[i][j] === 0)
            {
                isDraw = 0;
            }
        }
    }
    if(isDraw === 1) {
        alert("There is a Draw, please refresh");
        document.getElementById("infoDisplay").innerHTML = "Draw! Please hit refresh";
    }
}

//refresh handling
function refresh(){
    location.reload(true);
}




//testing===========================
function testingc1() {
    console.log("this is col1 from bottom to top:",grid[5][0], grid[4][0], grid[3][0], grid[2][0], grid[1][0], grid[0][0], iscolFull(0))
}
function testingc2() {
    console.log("this is col2 from bottom to top:",grid[5][1], grid[4][1], grid[3][1], grid[2][1], grid[1][1], grid[0][1], iscolFull(1))
}
function testingc3() {
    console.log("this is col3 from bottom to top:",grid[5][2], grid[4][2], grid[3][2], grid[2][2], grid[1][2], grid[0][2], iscolFull(2))
}
function testingc4() {
    console.log("this is col4 from bottom to top:",grid[5][3], grid[4][3], grid[3][3], grid[2][3], grid[1][3], grid[0][3], iscolFull(3))
}
function testingc5() {
    console.log("this is col5 from bottom to top:",grid[5][4], grid[4][4], grid[3][4], grid[2][4], grid[1][4], grid[0][4], iscolFull(4))
}
function testingc6() {
    console.log("this is col6 from bottom to top:",grid[5][5], grid[4][5], grid[3][5], grid[2][5], grid[1][5], grid[0][5], iscolFull(5))
}
function testingc7() {
    console.log("this is col7 from bottom to top:",grid[5][6], grid[4][6], grid[3][6], grid[2][6], grid[1][6], grid[0][6], iscolFull(6))
}