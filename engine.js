const templates = {
    login: {
        html: `<div class="login-box"><h2>Login</h2><input type="text" placeholder="Username"><input type="password" placeholder="Password"><button>Sign In</button></div>`,
        css: `.login-box { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 300px; text-align: center; } input { width: 90%; margin: 10px 0; padding: 8px; } button { background: #007bff; color: white; border: none; padding: 10px 20px; cursor: pointer; }`
    },
    card: {
        html: `<div class="profile-card"><img src="https://via.placeholder.com/100" alt="Profile"><h3>John Doe</h3><p>Web Developer</p></div>`,
        css: `.profile-card { background: #f9f9f9; border: 1px solid #ddd; padding: 20px; border-radius: 15px; text-align: center; font-family: sans-serif; } img { border-radius: 50%; }`
    }
};

document.getElementById('generateBtn').addEventListener('click', () => {
    const prompt = document.getElementById('userPrompt').value.toLowerCase();
    let result = { html: '<div>Component not found. Try "login" or "card"</div>', css: '' };

    if (prompt.includes('login')) result = templates.login;
    else if (prompt.includes('card')) result = templates.card;

    const finalCode = `<style>${result.css}</style>\n${result.html}`;
    
    document.getElementById('renderSurface').innerHTML = result.html;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = result.css;
    document.getElementById('renderSurface').appendChild(styleTag);
    
    document.getElementById('codeOutput').innerText = finalCode;
});

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(tab + 'Container').classList.add('active');
}
