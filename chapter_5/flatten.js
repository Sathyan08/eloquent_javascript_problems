var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(array, combine, start) {
  var current = start;
  for (var i = 1; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
};

function addArrays(array1, array2){
  return array1.concat(array2);
};

console.log(reduce(arrays, addArrays, arrays[0]));

