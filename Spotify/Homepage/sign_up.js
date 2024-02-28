// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Fetch user input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Store user data in localStorage
    var userData = {
        username: username,
        password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Redirect the user to the login page
    window.location.href = 'Sign_in.html';
}

// Add event listener to the form
var form = document.getElementById('signupForm');
form.addEventListener('submit', handleFormSubmit);
