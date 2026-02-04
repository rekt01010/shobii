const openBtn = document.getElementById('open-letter-btn');
const closeBtn = document.getElementById('close-letter');
const overlay = document.getElementById('letter-overlay');
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Show Letter & Start Confetti
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    createConfetti();
});

// Close Letter
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: ['#ffb7c5', '#ff4d6d', '#ffffff', '#ffe5ec'][Math.floor(Math.random() * 4)],
            velY: Math.random() * 3 + 2,
            velX: (Math.random() - 0.5) * 2
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.y += p.velY;
        p.x += p.velX;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.y > canvas.height) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});