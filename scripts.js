// Add any JavaScript functionality here if needed in the future
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

document.querySelectorAll('.emotion-button').forEach(button => {
    button.addEventListener('click', () => {
        const emotion = button.getAttribute('data-emotion');
        const description = document.querySelector(`.emotion-description[data-emotion="${emotion}"]`);
        
        // Hide all buttons
        document.querySelectorAll('.emotion-button').forEach(btn => btn.style.display = 'none');
        
        // Hide all descriptions
        document.querySelectorAll('.emotion-description').forEach(desc => desc.style.display = 'none');
        
        // Show the clicked description
        description.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show-menu');
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show-menu');
});
