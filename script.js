let counter = document.getElementById('number');
let counterSecond = 1;
let counterInt = setInterval(updateCounter, 300);

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

function updateCounter() {
    counter.innerText = counterSecond++;
    if (counterSecond > 20) {
        clearInterval(counterInt);
        counter.style.color = 'green';
    }
}
