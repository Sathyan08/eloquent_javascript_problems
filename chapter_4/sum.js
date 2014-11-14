function sumRange(start, end){
  var numbers = [ ];
  var current = start;
  while(current <= end){
    var copy = current;
    numbers.push(copy);
    current ++;
  };
  return addArray(numbers);
};

function addArray(collection){
  var total = 0

  for (var counter = 0; counter <= collection.length; counter ++){
    var total = total + counter;
  }
  return total
};

console.log(sumRange(1,3));


