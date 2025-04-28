// Update pet status
function updatePetStatus() {
    const status = document.getElementById('status');
    const lastUpdate = document.getElementById('lastUpdate');
    
    // Simulate real-time updates
    setInterval(() => {
        const states = ['Active', 'Resting', 'Moving'];
        status.textContent = states[Math.floor(Math.random() * states.length)];
        lastUpdate.textContent = '1 min ago';
    }, 60000);
}

// Start tracking function
function startTracking() {
    alert('Tracking started! This is where you would initialize GPS tracking.');
    // Add your tracking logic here
}

// Initialize map (placeholder)
function initMap() {
    // Add your map initialization code here
    // Example: Google Maps, Mapbox, etc.
    console.log('Map initialized');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updatePetStatus();
    initMap();
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
