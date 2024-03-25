// content.js
const img = document.createElement('img');
img.src = chrome.runtime.getURL('image.jpg.png');
img.style.position = 'fixed';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zIndex = '9999';
document.body.appendChild(img);
