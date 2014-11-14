var height = 8
var width = 8

var board = ''
var counter = 1

while (board.length < (height * width - 1){
  if (board.length % width == 0){
    var board = board + "0\n";
  }
  else if (board.length % 2 == 0){
    var board = board + "0";
  }
  else {
    var board = board + "#";
  };
  counter ++;
};
console.log(board)
