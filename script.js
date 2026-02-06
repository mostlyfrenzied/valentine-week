// Add to script.js
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    document.getElementById('question-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('bouquet').classList.add('bloom');
    }, 200);

    // Launch celebratory hearts
    for (let i = 0; i < 40; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// Add heart animation to the page
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .floating-heart {
        position: fixed;
        bottom: -10vh;
        user-select: none;
        pointer-events: none;
        animation: flyUp linear forwards;
    }
    @keyframes flyUp {
        to {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
