const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// "No" button logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// "Yes" button logic
yesBtn.addEventListener('click', () => {
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
    
    // Bloom the bouquet
    setTimeout(() => {
        document.getElementById('bouquet').classList.add('bloom');
    }, 200);

    // Start the Rose Petal Rain
    setInterval(createPetal, 300);
});

function createPetal() {
    const petal = document.createElement('div');
    // Randomly pick between different rose-themed icons
    const items = ['🌹', '🌷', '🌸', '✨'];
    petal.innerHTML = items[Math.floor(Math.random() * items.length)];
    
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 3 + 3) + 's';
    petal.style.opacity = Math.random();
    
    document.body.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        petal.remove();
    }, 6000);
}
