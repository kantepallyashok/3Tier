document.getElementById("calc-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;

  // Make API call to backend to get the result
  fetch(`http://backend:5000/calculate?num1=${num1}&num2=${num2}&operation=${operation}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").textContent = data.result;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
