function loadtext(textID){
    fetch('../dynamictext/' + textID + '.txt')  // Path to your text file
    .then(response => response.text())
    .then(text => {
        document.getElementById(textID + '-text').innerHTML = text;
    })
    .catch(error => console.error('Error loading the content:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('learn-more-btn');
    const fullText = document.getElementById('introduction_full-text');

    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor action

        // Toggle the display state of the full text
        if (fullText.style.display === 'none' || fullText.style.display === '') {
            fullText.style.display = 'block'; // Show the full text
            btn.textContent = 'Show Less'; // Change button text to 'Show Less'
        } else {
            fullText.style.display = 'none'; // Hide the full text
            btn.textContent = 'Learn More'; // Change button text back to 'Learn More'
        }
    });
});

// load the text files
loadtext("introduction");
loadtext("introduction_full");

