function reverseArray(array){
  var newArray = [];

  while (array.length > 0){
    var newElement = array.pop();
    newArray.push(newElement);
};
  return newArray;
};

console.log(reverseArray([1,2,3,4,5]))
