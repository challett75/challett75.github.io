/* 8/30/2024; user Christoper Hallett
JS version - 0.1 Notes: Began JavaScript for website, added a check address function.
*/
"Use Strict";


function checkAddress() {
   // Get the value entered by the user into the address input field
const addressInput = document.getElementById('address').value;

// Get the HTML element where the message will be displayed
const messageElement = document.getElementById('message');
    
    // Define a dummy function to simulate distance calculation
    function isWithinRange(address) {
        // Randomly determine if the address is within range (true or false)
        return Math.random() > 0.5; // 50% chance to be within range
    }

    if (isWithinRange(addressInput)) {

        alert('Great news! We can cater to your address.');
    } else {
       alert("Sorry, we can\'t cater to you. But you\'re more than welcome to stop by for a visit!");
    }  
}