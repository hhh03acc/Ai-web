function parsePrompt(input) {
    let result = { color: 'default', components: [] };
    const words = input.toLowerCase().split(' ');

    // تحليل الألوان من القاموس
    Object.keys(LEXICON.colors).forEach(color => {
        if (words.includes(color)) result.color = color;
    });

    // تحليل العناصر المطلوبة
    Object.keys(LEXICON.elements).forEach(el => {
        if (words.includes(el)) result.components.push(LEXICON.elements[el]);
    });

    return result;
}
