var board = new Array();
var score = 0;
$(function(){
    newgame();
})

function newgame(){
    //初始化棋盘格和数字格
    init();
    //随机生成两个数字
    generateOneNumber();
    generateOneNumber();
}

function init(){
    score = 0;
    updateScore(score);
    for(var i = 0; i < 4; i++){
        //定义了一个二维数组
        board[i] = new Array();
        for(var j = 0; j < 4 ; j++){
        //初始化了一个小盒子
        board[i][j] = 0;
        var boxCell = $("#box-" + i + "-" + j);
        boxCell.css("top",getPosTop(i,j));
        boxCell.css("left",getPosLeft(i,j));
        }
        
    }
    updateBoardView();
}  
function updateBoardView(){
    $(".number-cell").remove();
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4 ; j++){
            $(".box").append("<div class = 'number-cell' id = 'number-cell-"+i+"-"+j+"'></div>");
            var numberCell = $("#number-cell-"+i+"-"+j);
            if(board[i][j] == 0){
                numberCell.css("width","0px");
                numberCell.css("height","0px");
                numberCell.css("top",getPosTop(i,j)+50);
                numberCell.css("left",getPosLeft(i,j)+50);
            }
            else{
                numberCell.css("width","100px");
                numberCell.css("height","100px");
                numberCell.css("top",getPosTop(i,j));
                numberCell.css("left",getPosLeft(i,j));
                numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
                numberCell.css("color",getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }

        }
    }
}       
function generateOneNumber(){
    //生成一个随机位置的随机数
    //1.生成一个随机的位子
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    while(true){
        if(board[randx][randy] == 0){
            break;
        }
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
}
//2.生成随机的数字
var randNumber = Math.random()<0.5 ? 2 : 4;

//3.在随机的位子上生成随机的数字
board[randx][randy] = randNumber;

//实现随机数动画
ShowNumberWithAnimation(randx,randy,randNumber);


}
