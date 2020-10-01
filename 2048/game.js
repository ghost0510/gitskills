window.onload = function(){
    onkeydown = function(event){
    switch(event.key){
        case 'ArrowLeft'://left
            if(moveLeft()){
                generateOneNumber();
                // isGameover(board);
            }
        break;
        case 'ArrowUp'://up
            if(moveUp()){
                generateOneNumber();
                // isGameover(board);
            }
            break;
        case 'ArrowRight'://right
            if(moveRight()){
                generateOneNumber();
                // isGameover(board);
            }
            break;
        case 'ArrowDown'://down
            if(moveDown()){
                generateOneNumber();
                // isGameover(board);

            }
            break;    
    }
}
}

function moveLeft(){
    if(!canMoveLeft(board)){
        return false;
    }
    for (var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] != 0){
                for(var k = 0; k < j; k++){
                    if(board[i][k] == 0 && noBlockHorizontalCol(i,k,j,board)){
                        ShowMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[i][k] == board[i][j] && noBlockHorizontalCol(i,k,j,board)){
                        ShowMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);

    return true;
}

function moveRight(){
    if(!canMoveRight(board)){
        return false;
    }
    for (var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] != 0){
                for(var k = 3; k > j; k--){
                    if(board[i][k] == 0 && noBlockHorizontalCol1(i,k,j,board)){
                        ShowMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[i][k] == board[i][j] && noBlockHorizontalCol1(i,k,j,board)){
                        ShowMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);

    return true;
}

function moveUp(){
    if(!canMoveUp(board)){
        return false;
    }
    for (var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] != 0){
                for(var k = 0; k < i; k++){
                    if(board[k][j] == 0 && noBlockHorizontalCol2(k,i,j,board)){
                        ShowMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[k][j] == board[i][j] && noBlockHorizontalCol2(k,i,j,board)){
                        ShowMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);

    return true;
}

function moveDown(){
    if(!canMoveDown(board)){
        return false;
    }
    for (var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] != 0){
                for(var k = 3; k > i; k--){
                    if(board[k][j] == 0 && noBlockHorizontalCol3(k,i,j,board)){
                        ShowMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }else if(board[k][j] == board[i][j] && noBlockHorizontalCol3(k,i,j,board)){
                        ShowMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView();",200);

    return true;
}
function updateScore(score){
    var newscore = document.getElementById("score").textContent;
    var s = document.getElementById("score");
    s.innerHTML = score;
}



// function isGameover(board){
// if(!canMoveDown(board)&&!canMoveLeft(board)&&!canMoveRight(board)&&!canMoveUp(board)){
//     alert("游戏结束");
//     init();
//     updateScore(score);
//     generateOneNumber();
//     generateOneNumber();
// }
// return;

// }