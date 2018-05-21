/* Fibonacci Sequence Algorithm */

// Loop method
function fibonacci(num){
  let x = 1, y = 0, temp;

  while (num >= 0){
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }

  return y;
}

// Recursive method
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
