let minutes = -720;
let minDistanceToTop = window.innerHeight * 0.25;
let totalHeightMotion = window.innerHeight * 0.75;
let totalWidthMotion = window.innerWidth;

setTime();
setInterval(setTime, 1000);

function setTime() {
    let date = new Date();
    let dateMinutes = (date.getHours() * 60) + date.getMinutes();

    if (0 < dateMinutes < 720) {
        minutes = dateMinutes - 720;
    } else if (dateMinutes < 0) {
        minutes = dateMinutes + 720;
    }

    console.log(minutes);

    setPositions();
}

function setDimensions() {
    totalHeightMotion = window.innerHeight * 0.75;
    totalWidthMotion = window.innerWidth;

    minDistanceToTop = window.innerHeight * 0.25;
    particlesJS("particles-js", config);
}

window.addEventListener('resize', function() {
    setDimensions();
})

function updateBackground(hex) {
    document.getElementById('body').style.backgroundColor = '#' + hex;
}

function setPositions() {
    if (minutes > 720) {
        minutes = -720;
    }
    setSunPosition()
}

function setSunPosition() {
    let heightMotionProgress = totalHeightMotion * ((minutes / 720) ** 2);
    let totalDistanceToTop = minDistanceToTop + heightMotionProgress;

    let widthTime = totalWidthMotion / 2 + (totalWidthMotion * (minutes / 1440)) - 50;

    document.getElementById('sun').style.top = totalDistanceToTop + 'px';
    document.getElementById('sun').style.left = widthTime + 'px';
}