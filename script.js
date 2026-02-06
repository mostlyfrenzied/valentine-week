const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');
const bouquet = document.getElementById('bouquet');

// Make the "No" button dodge the cursor
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Handle the "Yes" click
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');

    // Make bouquet appear
    setTimeout(() => {
        bouquet.classList.add('bloom');
    }, 300);

    // Start Rose Day Petal Rain
    setInterval(createPetal, 200);
});

function createPetal() {
    const petal = document.createElement('div');
    const roses = ['🌹', '🌹', '❤️', '🌸', '✨']; 
    petal.innerHTML = roses[Math.floor(Math.random() * roses.length)];
    petal.className = 'petal';
    
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = Math.random() * 20 + 20 + 'px';
    petal.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 5000);
}
