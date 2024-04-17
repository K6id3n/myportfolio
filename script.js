

window.addEventListener('scroll', function () {
    if (!((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight)) <= 1)) {
    document.getElementById('opText').style.fontSize = (Math.max(18 - window.scrollY / 20)) + 'px';
    document.getElementById('opText').style.opacity = Math.max(0, 1 - window.scrollY / 500);
    document.getElementById('fol').style.marginTop = (100 - (window.scrollY / (window.innerHeight / 100))) + 'dvh';
    document.querySelector('.title').style.backgroundPositionY = (window.scrollY * (window.innerHeight / 4000)) + 'px';
    }
});

