let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let intervalId;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

startButton.addEventListener("click", function() {
    intervalId = setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 500);
});

stopButton.addEventListener("click", function() {
    clearInterval(intervalId);
});
