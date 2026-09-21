function calculateFactorial() {
  const input = document.getElementById("numberInput");
  const resultEl = document.getElementById("result");
  const n = Number(input.value);

  // Validation
  if (input.value === "" || !Number.isInteger(n) || n < 0) {
    resultEl.textContent = "Please enter a non-negative whole number.";
    return;
  }

  // Calculate factorial
  let result = 1n; // BigInt so large factorials don't lose precision
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }

  resultEl.textContent = `${n}! = ${result}`;
}

// Bonus: press Enter to calculate
document.getElementById("numberInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculateFactorial();
});
