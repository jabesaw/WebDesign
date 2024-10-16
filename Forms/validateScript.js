document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the input field and the error message element
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const errorMessage = document.getElementById('errorMessage');
  
    // Add an event listener to the form submit event
    form.addEventListener('submit', function (event) {
      // Define the alphanumeric regex pattern (letters and numbers only)
      const alphaNumericPattern = /^[a-zA-Z0-9]+$/;
  
      // Get the value of the input field
      const inputValue = inputField.value.trim();
  
      // Check if the input value matches the alphanumeric pattern
      if (!alphaNumericPattern.test(inputValue)) {
        // If input is invalid, show error message and prevent form submission
        errorMessage.textContent = 'Please enter a valid alphanumeric value.';
        errorMessage.style.display = 'block';
        event.preventDefault(); // Prevent form submission
      } else {
        // If input is valid, clear the error message and 'submit' the form
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
      }
    });
  });
  