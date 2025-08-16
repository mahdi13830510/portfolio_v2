// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Matrix Rain Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'var(--matrix-green)';
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((drop, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);
        if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}

setInterval(drawMatrix, 100);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
});


// Theme Switcher
function setTheme(theme) {
    if (theme === 'green') {
        document.documentElement.style.setProperty('--matrix-green', '#0f0');
        document.documentElement.style.setProperty('--cyber-blue', '#0ff');
        document.documentElement.style.setProperty('--neon-purple', '#b026ff');
    } else if (theme === 'blue') {
        document.documentElement.style.setProperty('--matrix-green', '#00f');
        document.documentElement.style.setProperty('--cyber-blue', '#0ff');
        document.documentElement.style.setProperty('--neon-purple', '#00ced1');
    } else if (theme === 'purple') {
        document.documentElement.style.setProperty('--matrix-green', '#b026ff');
        document.documentElement.style.setProperty('--cyber-blue', '#ff0');
        document.documentElement.style.setProperty('--neon-purple', '#ff00ff');
    } else if (theme === 'custom') {
        const green = prompt('Enter green color (hex):');
        const blue = prompt('Enter blue color (hex):');
        const purple = prompt('Enter purple color (hex):');
        document.documentElement.style.setProperty('--matrix-green', green || '#0f0');
        document.documentElement.style.setProperty('--cyber-blue', blue || '#0ff');
        document.documentElement.style.setProperty('--neon-purple', purple || '#b026ff');
    }
}
