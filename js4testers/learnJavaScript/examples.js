function add(a, b ){
  return a + b;
}

function average(numbers){
  var sum = 0, i, length = numbers.length;

  for (i = 0; i < length; i++){
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function power(base, exponent){
  // TODO: implement and test this function
}

// Node: make the functions public:
if (typeof(module) != 'undefined'){
   module.exports = {
      average: average,
      add: add
   };
}

