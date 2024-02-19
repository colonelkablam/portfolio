document.getElementById('contactForm').onsubmit = function() {
    // Check if the checkbox is ticked
    if (!document.getElementById('are-you-human').checked) {
        // Prevent form submission
        alert('Please confirm that you are not a robot.');
        return false; // This will stop the form from submitting
    }
};