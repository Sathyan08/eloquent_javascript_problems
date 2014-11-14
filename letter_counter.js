function countChar (string, target){
  var counter = 0;

  for (var number = 0; number < string.length; number ++){
    if (string[number] === target){
      counter ++;
    };
  };

  return counter;
};

console.log(countChar("five", "f"))
console.log(countChar("igloo", "o"))
console.log(countChar("salamander", "a"))
