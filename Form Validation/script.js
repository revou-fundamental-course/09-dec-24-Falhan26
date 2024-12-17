document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    if (name === '' || email === '' || destination === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can add more validation here if needed

    alert('Thank you for your inquiry, ' + name + '!');
    // Optionally, you can reset the form
    this.reset();
});

// Auto-slide functionality for the banner can be added here