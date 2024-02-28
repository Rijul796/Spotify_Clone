// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Fetch user input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        // Check if username and password match
        if (username === userData.username && password === userData.password) {
            alert('Login successful!');
            // Redirect the user to the dashboard or homepage
            window.location.href = 'index.html'; // Change to the appropriate page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('User data not found. Please sign up first.');
        // Redirect the user to the signup page
        window.location.href = 'signup.html';
    }
});
