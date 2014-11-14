function even(n){
  if (n == 0){
    return true;
  } else if(n == 1) {
    return false;
  } else {
    return even(n - 2);
  }
};

console.log (even(10));
console.log (even(101));
