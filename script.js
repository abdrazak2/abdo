// إضافة تأثيرات للمؤشر
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.pageY - 12}px`;
    cursor.style.left = `${e.pageX - 12}px`;
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        cursor.classList.add('scale-up');
    } else {
        cursor.classList.remove('scale-up');
    }
});
