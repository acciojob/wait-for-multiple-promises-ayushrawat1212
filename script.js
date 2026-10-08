//your JS code here. If required.
// Function to create a promise with a random delay
function createPromise() {
  return new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 3) + 1;

    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

// Create three independent promises
const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

// Select the table body
const output = document.getElementById("output");

// Record the starting time
const startTime = performance.now();

// Wait for all promises to resolve
Promise.all([p1, p2, p3])
  .then((results) => {

    // Calculate total elapsed time
    let totalTime = (performance.now() - startTime) / 1000;

    // Remove the Loading row
    output.innerHTML = "";

    // Display individual promise results
    results.forEach((time, index) => {
      let row = document.createElement("tr");

      row.innerHTML = `
        <td>Promise ${index + 1}</td>
        <td>${time.toFixed(3)} seconds</td>
      `;

      output.appendChild(row);
    });

    // Create Total row
    let totalRow = document.createElement("tr");

    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalTime.toFixed(3)} seconds</td>
    `;

    output.appendChild(totalRow);
  })
  .catch((error) => {
    console.error(error);
  });