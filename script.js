function updatePetStatus() {
    const status = document.getElementById('status');
    const lastUpdate = document.getElementById('lastUpdate');
    
    
    setInterval(() => {
        const states = ['Active', 'Resting', 'Moving'];
        status.textContent = states[Math.floor(Math.random() * states.length)];
        lastUpdate.textContent = '1 min ago';
    }, 60000);
}

function startTracking() {
    alert('Tracking started! This is where you would initialize GPS tracking.');
}

function initMap() {
    console.log('Map initialized');
}

document.addEventListener('DOMContentLoaded', () => {
    updatePetStatus();
    initMap();
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
