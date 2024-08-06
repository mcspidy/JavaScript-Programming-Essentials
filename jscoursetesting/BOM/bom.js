const alterButton = document.getElementById('alterButton');
const openWindowButton = document.getElementById('openWindowButton');
const closeWindowButton = document.getElementById('closeWindowButton');
const navigateBackButton = document.getElementById('navigateBackButton');
const navigateForwardButton = document.getElementById('navigateForwardButton');
const changeURLButton = document.getElementById('changeURLButton');

// Attach event listeners
alertButton.addEventListener('click', () => {
    window.alert('Button clicked!');
});

openWindowButton.addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});

closeWindowButton.addEventListener('click', () => {
    window.close();
});

navigateBackButton.addEventListener('click', () => {
    window.history.back();
});

navigateForwardButton.addEventListener('click', () => {
    window.history.forward();
});

changeURLButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});