// Simulated File System
const fileSystem = {
    '/': {
        'sys': {
            'logs': {
                'access.log': 'Access granted: 2077-10-10',
                'hack.log': 'Intrusion detected... just kidding!'
            },
            'bin': {
                'netscan.sh': 'Type "netscan" to simulate a network sweep.'
            }
        },
        'home': {
            'user': {
                'docs': {
                    'welcome.txt': 'Greetings, cyber-traveler! Explore with "ls" and "cd".',
                    'secrets': {
                        'code.txt': 'Secret code: NEONLIFE',
                        'easter.txt': 'Try "glow" for something shiny!'
                    }
                }
            }
        }
    }
};

// Command Definitions
const commands = {
    'ls': listDir,
    'cd': changeDir,
    'cat': readFile,
    'pwd': printWorkingDir,
    'clear': clearScreen,
    'whoami': whoAmI,
    'echo': echo,
    'matrix': matrixEffect,
    'netscan': netScan,
    'game': playGame,
    'history': showHistory,
    'help': showHelp,
    'theme': setTheme,
    'fontsize': setFontSize,
    'bg': setBackground,
    'edit': editFile,
    'traceroute': simTraceroute,
    'art': showArt,
    'glow': setGlow,
    'rainbow': rainbowText,
    'time': showTime,
    'joke': tellJoke
};

// Terminal State
let currentPath = ['/'];
let commandHistory = [];
let historyIndex = -1;
let autoCompleteIndex = 0;
let autoCompleteOptions = [];
let envVars = { USER: 'neonrunner' };
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// DOM Elements
const output = document.getElementById('output');
const prompt = document.getElementById('prompt');
const input = document.getElementById('command-input');
const matrixCanvas = document.getElementById('matrix');
const glitchDiv = document.getElementById('glitch');
const circuitDiv = document.getElementById('circuit');

// Utility Functions
function getCurrentDir() {
    let dir = fileSystem;
    for (const part of currentPath) dir = dir[part];
    return dir;
}

function resolvePath(path) {
    if (!path) return getCurrentDir();
    const parts = path.startsWith('/') ? path.slice(1).split('/') : path.split('/');
    let dir = path.startsWith('/') ? fileSystem['/'] : getCurrentDir();
    for (const part of parts) {
        if (part === '' || part === '.') continue;
        if (part === '..' && currentPath.length > 1) {
            currentPath.pop();
            dir = getCurrentDir();
        } else if (dir[part]) {
            dir = dir[part];
        } else {
            return null;
        }
    }
    return dir;
}

function updatePrompt() {
    prompt.textContent = `${envVars.USER}@grid:${currentPath.join('/')}$ `;
}

function print(text, color = 'inherit') {
    const p = document.createElement('p');
    p.textContent = text;
    p.style.color = color;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

// Sound Effect
function playSound(frequency, duration) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = frequency;
    gainNode.gain.value = 0.1;
    oscillator.start();
    setTimeout(() => oscillator.stop(), duration);
}

// Command Implementations
function listDir(args) {
    const dir = args[0] ? resolvePath(args[0]) : getCurrentDir();
    if (dir && typeof dir === 'object') {
        print(Object.keys(dir).join('  '));
    } else {
        print('Error: No such directory');
    }
}

function changeDir(args) {
    const target = args[0] || '/';
    if (target === '/') {
        currentPath = ['/'];
    } else if (target === '..') {
        if (currentPath.length > 1) currentPath.pop();
    } else {
        const newDir = resolvePath(target);
        if (newDir && typeof newDir === 'object') {
            if (target.startsWith('/')) {
                currentPath = target.split('/').filter(Boolean);
            } else {
                currentPath.push(target);
            }
        } else {
            print('Error: Invalid path');
            return;
        }
    }
    updatePrompt();
}

function readFile(args) {
    if (!args[0]) {
        print('Error: Specify a file');
        return;
    }
    const file = resolvePath(args[0]);
    if (file && typeof file === 'string') {
        print(file);
    } else {
        print('Error: File not found');
    }
}

function printWorkingDir() {
    print(currentPath.join('/'));
}

function clearScreen() {
    output.innerHTML = '';
}

function whoAmI() {
    print(envVars.USER);
}

function echo(args) {
    print(args.join(' '));
}

function matrixEffect(args) {
    if (args[0] === 'off') {
        matrixCanvas.style.opacity = '0';
        print('Matrix rain stopped.');
    } else {
        matrixCanvas.style.opacity = '0.6';
        print('Matrix rain activated! Type "matrix off" to stop.');
    }
}

function netScan() {
    print('Scanning network...');
    setTimeout(() => print('Found: 192.168.1.1 - Active'), 1000);
    setTimeout(() => print('Found: 10.0.0.138 - Hidden node'), 2000);
    setTimeout(() => print('Scan complete. 2 nodes detected.'), 3000);
}

function playGame(args) {
    if (args[0] === 'guess') {
        print('Guess a number between 1 and 10!');
        const number = Math.floor(Math.random() * 10) + 1;
        const guess = prompt('Enter your guess:');
        if (parseInt(guess) === number) {
            print('You got it! Winner!');
        } else {
            print(`Nope! It was ${number}. Try again with "game guess".`);
        }
    } else {
        print('Available games: "game guess"');
    }
}

function showHistory() {
    commandHistory.forEach((cmd, i) => print(`${i + 1}  ${cmd}`));
}

function showHelp() {
    print('Commands to Explore:');
    Object.keys(commands).forEach(cmd => print(`  ${cmd}`));
    print('Try "theme", "bg", "game", or "art" for fun!');
}

function setTheme(args) {
    if (!args[0]) {
        print('Usage: theme [green|blue|purple|red|neon]');
        return;
    }
    const themes = {
        'green': { text: '#0f0', prompt: '#ff003c', highlight: '#0ff' },
        'blue': { text: '#00f', prompt: '#0ff', highlight: '#ff0' },
        'purple': { text: '#b026ff', prompt: '#ff0', highlight: '#0ff' },
        'red': { text: '#f00', prompt: '#fff', highlight: '#ff0' },
        'neon': { text: '#ff00ff', prompt: '#00ffff', highlight: '#ffff00' }
    };
    if (themes[args[0]]) {
        const { text, prompt, highlight } = themes[args[0]];
        document.documentElement.style.setProperty('--text-color', text);
        document.documentElement.style.setProperty('--prompt-color', prompt);
        document.documentElement.style.setProperty('--highlight-color', highlight);
        print(`Theme switched to ${args[0]}`);
    } else {
        print('Themes: green, blue, purple, red, neon');
    }
}

function setFontSize(args) {
    if (!args[0] || isNaN(args[0])) {
        print('Usage: fontsize [size in px]');
        return;
    }
    const size = parseInt(args[0]);
    if (size < 12 || size > 40) {
        print('Size must be 12-40 px');
        return;
    }
    document.documentElement.style.setProperty('--font-size', `${size}px`);
    print(`Font size now ${size}px`);
}

function setBackground(args) {
    if (!args[0]) {
        print('Usage: bg [matrix|glitch|circuit|none]');
        return;
    }
    matrixCanvas.style.opacity = '0';
    glitchDiv.style.opacity = '0';
    circuitDiv.style.opacity = '0';
    switch (args[0]) {
        case 'matrix': matrixCanvas.style.opacity = '0.6'; break;
        case 'glitch': glitchDiv.style.opacity = '0.4'; break;
        case 'circuit': circuitDiv.style.opacity = '0.3'; break;
        case 'none': break;
        default: print('Options: matrix, glitch, circuit, none'); return;
    }
    print(`Background set to ${args[0]}`);
}

function editFile(args) {
    if (!args[0]) {
        print('Usage: edit [file]');
        return;
    }
    const filePath = args[0];
    const dir = getCurrentDir();
    if (dir[filePath]) {
        const content = prompt('Edit content:', dir[filePath]);
        if (content !== null) {
            dir[filePath] = content;
            print(`Updated ${filePath}`);
        }
    } else {
        const create = confirm('File not found. Create it?');
        if (create) {
            const content = prompt('Enter content:');
            if (content !== null) {
                dir[filePath] = content;
                print(`Created ${filePath}`);
            }
        }
    }
}

function simTraceroute(args) {
    if (!args[0]) {
        print('Usage: traceroute [destination]');
        return;
    }
    print(`Tracing route to ${args[0]}...`);
    setTimeout(() => print('1  192.168.1.1  1ms'), 1000);
    setTimeout(() => print('2  10.0.0.1  3ms'), 2000);
    setTimeout(() => print('3  [destination]  5ms'), 3000);
}

function showArt(args) {
    if (!args[0]) {
        print('Usage: art [cyber|skull]');
        return;
    }
    const arts = {
        'cyber': `
   >//:SYSTEM
   >//:HACKED
   >//:NEON
`,
        'skull': `
   ___
  /   \\
 |  X  |
  \\   /
   ---
`
    };
    if (arts[args[0]]) {
        print(arts[args[0]]);
    } else {
        print('Art options: cyber, skull');
    }
}

function setGlow(args) {
    const intensity = args[0] ? parseInt(args[0]) : 10;
    if (isNaN(intensity) || intensity < 0 || intensity > 20) {
        print('Usage: glow [0-20]');
        return;
    }
    document.documentElement.style.setProperty('--glow-intensity', `${intensity}px`);
    print(`Glow set to ${intensity}px`);
}

function rainbowText() {
    const colors = ['#f00', '#ff0', '#0f0', '#00f', '#f0f'];
    let i = 0;
    const interval = setInterval(() => {
        output.style.color = colors[i % colors.length];
        i++;
        if (i > 20) clearInterval(interval);
    }, 200);
    print('Rainbow mode activated!');
}

function showTime() {
    print(new Date().toLocaleTimeString());
}

function tellJoke() {
    const jokes = [
        'Why don’t programmers prefer dark mode? Because the light attracts bugs.',
        'What’s a hacker’s favorite instrument? The keyboard.'
    ];
    print(jokes[Math.floor(Math.random() * jokes.length)]);
}

// Auto-Complete
function autoComplete() {
    const value = input.value.trim();
    const parts = value.split(' ');
    const lastPart = parts[parts.length - 1];
    autoCompleteOptions = parts.length === 1 ?
        Object.keys(commands).filter(cmd => cmd.startsWith(lastPart)) :
        Object.keys(getCurrentDir()).filter(item => item.startsWith(lastPart));
    if (autoCompleteOptions.length) {
        autoCompleteIndex = (autoCompleteIndex + 1) % autoCompleteOptions.length;
        parts[parts.length - 1] = autoCompleteOptions[autoCompleteIndex];
        input.value = parts.join(' ');
    }
}

// Execute Command
function executeCommand(cmd) {
    playSound(440, 100); // Beep!
    const parts = cmd.trim().split(' ');
    const command = parts[0];
    const args = parts.slice(1);
    if (commands[command]) {
        commands[command](args);
    } else {
        print(`Unknown command: ${command}. Type "help" for options.`);
    }
}

// Input Handling
input.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'Enter':
            const cmd = this.value.trim();
            if (cmd) {
                commandHistory.push(cmd);
                historyIndex = commandHistory.length;
                print(`${prompt.textContent}${cmd}`);
                executeCommand(cmd);
            }
            this.value = '';
            autoCompleteOptions = [];
            autoCompleteIndex = 0;
            break;
        case 'Tab':
            e.preventDefault();
            autoComplete();
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
            break;
        case 'ArrowDown':
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
            break;
    }
});

// Matrix Effect
const ctx = matrixCanvas.getContext('2d');
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;
const chars = '01アカサタナハマヤラワ';
const fontSize = 14;
let columns = Math.floor(matrixCanvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = 'var(--text-color)';
    ctx.font = `${fontSize}px monospace`;
    drops.forEach((drop, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);
        if (drop * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

// Initialize
updatePrompt();
print('Welcome to the Cyber Grid!');
print('Type "help" to see all the cool stuff you can do!');
