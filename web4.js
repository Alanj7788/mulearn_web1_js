function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password");
        return false;
    }

    // Password should contain at least 8 characters
    if (password.length < 8) {
        alert("Password should contain at least 8 characters");
        return false;
    }

    // Email should contain @ symbol (simple check for a basic email format)
    if (username.indexOf("@") === -1) {
        alert("Invalid email format");
        return false;
    }

    // If all conditions pass, allow form submission
    return true;
}
