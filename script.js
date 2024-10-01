// Script for handling the form submission and alerting the user's input
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Fetch values from input fields
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? 
                   document.querySelector('input[name="rating"]:checked').value : "No rating selected";

    // Alert the user's input
    if (name && email) {
        alert(`Thank you, ${name}! You have rated this page ${rating} stars. We will reach out to you at ${email}.`);
    } else {
        alert("Please fill out both your name and email before submitting.");
    }
});

// Script for adding hover effects to table rows
const tableRows = document.querySelectorAll('table tr');

tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#d3e4f7'; // Highlight row on hover
    });
    
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = ''; // Remove highlight when mouse leaves
    });
});

// Script for automatically stopping the video when leaving the page section
const videoElement = document.querySelector('video');
window.addEventListener('scroll', () => {
    const videoPosition = videoElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (videoPosition > windowHeight || videoPosition < 0) {
        videoElement.pause();
    } else {
        videoElement.play();
    }
});
