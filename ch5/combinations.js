
function fact(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function combinations(n, k) {
  return fact(n) / (fact(k) * fact(n - k));
}
