// This function will be used to validate a form before submission
// Getting input values from the forms fields

function validateForm() {
    // let is used to declare the variable because it is block scoped and for this project it only will be needed one function
    // Elements will be retrived by Id which is defined on the form
    
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let phoneNumber = document.getElementById("phoneNum").value;
    let email = document.getElementById("emailAddr").value;

    
    let RegexIsLetter = /^[A-Za-z]+$/;

    if (!RegexIsLetter.test(firstName)) {
        alert("A First Name must contain only letters.");
        return false;
    }
    if (!RegexIsLetter.test(lastName)) {
        alert("A Last Name must contain only letters.");
        return false;
    }

    let phoneRegex = /^\d{9}$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid Irish phone number. It can only contains 9 numbers from 0-9.");
        return false;
    }

    // Regular expression to check if a email address contains @ (at) and . (dot)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
   
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    //If it passes for every validations successfully, it will return true and will be an alert with a thank you message.
    alert("Thank you for submitting the form.")

    return true;
}
