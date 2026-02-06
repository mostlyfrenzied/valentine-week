const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('bouquet').classList.add('bloom');
    }, 300);

    setInterval(createPetal, 200);
});

function createPetal() {
    const petal = document.createElement('div');
    const icons = ['🌹', '🌹', '❤️', '🌸']; 
    petal.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = Math.random() * 20 + 20 + 'px';
    petal.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
}
