function fadeIn(n) {
    var cls = "." + n;
    document.querySelector(cls).style.opacity = 0.7;
    document.querySelector(cls).style.animationDelay + 100;
}

function fadeOut(n) {
    var cls = "." + n;
    document.querySelector(cls).style.opacity = 0;
    document.querySelector(cls).style.animationDelay + 100;
}

function getDeviceSize() {
    var w, h;

    if (typeof window.innerWidth != 'undefined') {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    elseif (typeof document.documentElement != 'undefined' &&
    document.documentElement.clientWidth != 'undefined' &&
    document.documentElement.clientWidth != 0) {
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
    }
    else {
        w = document.body.clientWidth;
        h = document.body.clientHeight;
    }
    return {'width': w, 'height': h};
}

if (parseInt(getDeviceSize) < 600) {
    document.querySelector('.containerSubtop').style.visilibility = visible;
    document.querySelector('.container-right').style.display = none;
}

if (parseInt(getDeviceSize) < 970) {
    document.querySelector('.container-left').style.width = 380px;
    document.querySelector('.container-aboutMe').style.margin-left = 35px;
    document.querySelector('.container-aboutMe').style.margin-right = 35px;
}