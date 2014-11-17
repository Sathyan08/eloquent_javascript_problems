function arrayToList(array) {

  if (array.length === 1){

    return {
      value: array[0],
      rest: null
    }
  } else {

    var nextItem = array.shift();
    return {
      value: nextItem,
      rest: arrayToList(array)
    };
  }
};

var target = arrayToList([1,2,3,4,5]);

console.log(target.rest.rest);
