document.getElementById('generateBtn').addEventListener('click', () => {
    const prompt = document.getElementById('userPrompt').value;
    const renderSurface = document.getElementById('renderSurface');
    
    // استخدام المحرك الخارجي (Parser)
    const analysis = parsePrompt(prompt);
    const theme = LEXICON.colors[analysis.color] || { bg: 'white', border: '#ddd', text: '#333' };

    let htmlContent = analysis.components.join('<br>');
    if(htmlContent === "") htmlContent = "<p>Please specify: button, input, or card</p>";

    const finalHTML = `
        <div style="background:${theme.bg}; border:2px solid ${theme.border}; color:${theme.text}; padding:20px; border-radius:10px;">
            ${htmlContent}
        </div>`;

    renderSurface.innerHTML = finalHTML;
    document.getElementById('codeOutput').innerText = finalHTML;
});
