let board = [];
//     [0,0,0],
//     [0,0,0],
//     [0,0,0],
// ];
let max=10;
for (let i=0;i<max;i++){
    board.push([]);
    for (let j=0;j<max;j++){
        board[i].push(0);
    }
}
document.write("<table border='1'>");
for (let i=0; i<board.length;i++){
    document.write("<tr>");
    for (let j=0;j<board[i].length;j++){
        document.write("<td"+"id='"+i+j+"'" onclick='click_cell("+i+","+j+") style='width:20px,height:20px';>");
        document.write(board[i][j]);
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
function click_cell(i,j){
    document.getElementById(""+i+j).innerHTML="X";
}

