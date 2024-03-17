// Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."



// Function to check  number is prime
function isprime(num) {
  if (num == 1) {
    return false;
  } else if (num < 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Function to find prime factors of a number
function primeFactors(n) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

function problem(x) {
  function reverseNumber(n) {
    let str = n.toString();
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return parseInt(reversed);
  }

  const reversed = reverseNumber(x);
  const Factors = primeFactors(reversed);

  const primeReversed = Factors.filter(isprime);

  if (primeReversed.length > 0) {
    return `"Yes: "  [${primeReversed.join(", ")}]`;
  } else {
    return "No";
  }
}
function dataclick(){
    const num=document.getElementById("num").value

let data = problem(num);
alert(data);
console.log(data)
}
