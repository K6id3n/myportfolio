window.addEventListener('scroll', function () {
    document.getElementById('opText').style.fontSize = (Math.max(18 - window.scrollY / 20)) + 'px';
    document.getElementById('opText').style.opacity = Math.max(0, 1 - window.scrollY / 500);
    let pos = window.scrollY;
    if (pos >= 344) {
        pos = 344;
    }
    document.getElementById('fol').style.transform = 'translateY(' + -(pos * 2) + 'px)';
   
});
