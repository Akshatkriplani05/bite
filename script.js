document.querySelector('.no-button').addEventListener('click', function() {
    console.log('No'); // Prints "No" to the console
    
    // Move the button to a random location
    this.classList.add('moved'); // Add class for absolute positioning
    
    // Generate random coordinates within the viewport
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    this.style.top = `${randomY}px`;
    this.style.left = `${randomX}px`;

document.querySelector('.no-message').style.display = 'block';
});

document.querySelector('.yes-button').addEventListener('click', function () {
    const popupContainer = document.getElementById('popup-container');
    
    // Display the pop-up container
    popupContainer.style.display = 'block';
    
    // Add the 'show' class to trigger the transition
    popupContainer.classList.add('show');
    
    // Play music (optional)
    const music = document.getElementById('yes-music');
    music.currentTime = 46; // Start from a specific time
    music.play();
});

// Close pop-up when clicking outside of it (optional)
document.addEventListener('click', function (event) {
    const popupContainer = document.getElementById('popup-container');
    
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
        popupContainer.classList.remove('show');
        
        const music = document.getElementById('yes-music');
        music.pause(); // Stop music when closing (optional)
    }
});

