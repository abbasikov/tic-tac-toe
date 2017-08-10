var placeHolderNumber = -9;
var matrix= [
    [-9, -9,-9],
    [-9, -9,-9],
    [-9, -9,-9]
];

//For True: the value is 1
//For False: the value is 0
var markCross = false;

//This function will put either 0 or 1
//in matrix based on markCross bool value.
//Each time this function is called it will toggle
//the value of markCross
function makeMark(rowIndex, colIndex){
    matrix[rowIndex][colIndex] = markCross ? 1 : 0;
    markCross = !markCross;
}

//This function will check the matrix in row,col and diagonal
function checkBoard(){

    var playerZero = false;

    var r1Sum = matrix[0][0]+matrix[0][1]+matrix[0][2];
    var r1 = (r1Sum == 0 || r1Sum==3) ? true:false;
    playerZero =  (r1Sum == 0);

    var r2Sum = matrix[1][0]+matrix[1][1]+matrix[1][2];
    var r2 = (r2Sum == 0 || r2Sum==3) ? true:false;
    playerZero =  (playerZero) ? playerZero: (r2Sum ==0 );

    var r3Sum = matrix[2][0]+matrix[2][1]+matrix[2][2];
    var r3 = (r3Sum == 0 || r3Sum==3) ? true:false;
    playerZero =  (playerZero)? playerZero :(r3Sum ==0 );

    var c1Sum = matrix[0][0]+matrix[1][0]+matrix[2][0];
    var c1 = (c1Sum == 0 || c1Sum==3) ? true:false;
    playerZero =  playerZero ? playerZero :(c1Sum ==0 );

    var c2Sum = matrix[0][1]+matrix[1][1]+matrix[2][1];
    var c2 = (c2Sum == 0 || c2Sum==3) ? true:false;
    playerZero =  playerZero? playerZero:(c2Sum ==0 );

    var c3Sum = matrix[0][2]+matrix[1][2]+matrix[2][2];
    var c3 = (c3Sum == 0 || c3Sum==3) ? true:false;
    playerZero =  playerZero ? playerZero :(c3Sum ==0 );

    var d1Sum = matrix[0][0]+matrix[1][1]+matrix[2][2];
    var d1 = (d1Sum == 0 || d1Sum==3) ? true:false;
    playerZero =  playerZero?playerZero:(d1Sum ==0 );

    var d2Sum = matrix[0][2]+matrix[1][1]+matrix[2][0];
    var d2 = (d2Sum == 0 || d2Sum==3) ? true:false;
    playerZero =  playerZero?playerZero:(d2Sum ==0 );

    if(r1 || r2 || r3 || c1 || c2 || c3 || d1 || d2){
        alert('The Game is Over. Player:'+(playerZero?'0':'1')+' wins');
    }

}

function changeText(id){
    $('#'+id).text(markCross ? '0' : '1');
}

$(document).ready(function() {

    //======First Row==========
    $('#one').click(function(){
        if(matrix[0][0] == placeHolderNumber){
            makeMark(0,0);
            changeText('one');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#two').click(function(){
        if(matrix[0][1] == placeHolderNumber){
            makeMark(0,1);
            changeText('two');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#three').click(function(){
        if(matrix[0][2] == placeHolderNumber){
            makeMark(0,2);
            changeText('three');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });
    //======First Row==========

    //======Second Row==========
    $('#four').click(function(){
        if(matrix[1][0] == placeHolderNumber){
            makeMark(1,0);
            changeText('four');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#five').click(function(){
        if(matrix[1][1] == placeHolderNumber){
            makeMark(1,1);
            changeText('five');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#six').click(function(){
        if(matrix[1][2] == placeHolderNumber){
            makeMark(1,2);
            changeText('six');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });
    //======Second Row==========

    //======Third Row==========
    $('#seven').click(function(){
        if(matrix[2][0] == placeHolderNumber){
            makeMark(2,0);
            changeText('seven');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#eight').click(function(){
        if(matrix[2][1] == placeHolderNumber){
            makeMark(2,1);
            changeText('eight');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });

    $('#nine').click(function(){
        if(matrix[2][2] == placeHolderNumber){
            makeMark(2,2);
            changeText('nine');
            checkBoard();
        }else {
            alert('marking is done');
        }
        console.log(matrix);
    });
    //======Third Row==========


});