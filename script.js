// Get the DOM element where we'll display the received string
const receivedStringElement = document.getElementById('received-string');

// Function to update the displayed string
function updateDisplayedString(newString) {
    receivedStringElement.textContent = `Received string: ${newString}`;
}

// You can also make an initial request to get any previously received string when the page loads
// Example:
// fetch('/getReceivedString')
//     .then(response => response.text())
//     .then(data => updateDisplayedString(data));
