// Array of blessing messages
const blessings = [
    "願您的生活如詩如畫，每一個清晨都能迎來新的希望，每一個夜晚都能帶著滿足入眠，所有的努力都能開花結果，所有的夢想都能成真。",
    "願健康如春風般常伴您左右，快樂如繁星般點亮您的每一個夜晚，所有的期待都能如願以償。",
    "願您在未來的日子裡，擁有無盡的勇氣與智慧，面對生活中的每一個挑戰，並在風雨過後，迎來屬於自己的彩虹與陽光。",
    "願您的每一天都充滿愛與溫暖，每一個夢想都能在努力中實現，所有的美好都如約而至。",
    "願您的人生如一首優美的樂章，每一個音符都充滿喜悅與感動，每一個選擇都能帶來無悔的回憶，每一段旅程都能充滿意義與收穫。",
    "願您的笑容如陽光般燦爛，心靈如星空般深邃，願所有的美好都圍繞在您身邊。",
    "願您的心靈如大海般寬廣，容納所有的喜怒哀樂，願您的腳步如微風般輕盈，走遍世界的每一個角落，找到屬於自己的幸福與平靜。",
    "願所有的努力都能開花結果，所有的期待都能如願以償，願幸福與您常伴。",
    "願您的生活充滿陽光與笑聲，無論前方的路途多麼崎嶇，都能以堅定的步伐邁向夢想，並在每一個平凡的日子裡，找到屬於自己的幸福與滿足。"
];

// Get DOM elements
const generateBtn = document.getElementById('generate-btn');
const blessingText = document.getElementById('blessing-text');
const blessingBox = document.getElementById('blessing-box');

// Generate random blessing
function generateBlessing() {
    // Clear previous content
    blessingText.innerHTML = '';
    blessingBox.style.opacity = '0';
    
    // Get random blessing
    const randomIndex = Math.floor(Math.random() * blessings.length);
    const blessing = blessings[randomIndex];
    
    // Split blessing into lines
    const lines = blessing.split('，');
    
    // Animate text display
    lines.forEach((line, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = line + (index < lines.length - 1 ? '，' : '');
            p.style.opacity = '0';
            blessingText.appendChild(p);
            
            // Fade in animation
            setTimeout(() => {
                p.style.opacity = '1';
            }, 100);
        }, index * 200);
    });
    
    // Fade in box
    setTimeout(() => {
        blessingBox.style.opacity = '1';
    }, 100);
}

// Button click handler
generateBtn.addEventListener('click', () => {
    // Button animation
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        generateBtn.style.transform = 'scale(1)';
    }, 100);
    
    // Generate new blessing
    generateBlessing();
});
