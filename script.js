window.addEventListener('scroll', function () {
    document.getElementById('opText').style.fontSize = (Math.max(18 - window.scrollY / 20)) + 'px';
    document.getElementById('opText').style.opacity = Math.max(0, 1 - window.scrollY / 500);
    document.getElementById('fol').style.marginTop = (100 - (window.scrollY / (window.innerHeight / 100))) + 'dvh';
    document.querySelector('.title').style.backgroundPositionY = (window.scrollY * 0.2) + 'px'; 
});
// document.addEventListener('mousemove', function(e) {
//     var cursor = document.getElementById('cur');
//     setTimeout(function() {
//         cursor.style.left = (e.pageX - 10) + 'px'; 
//         cursor.style.top = (e.pageY - 10) + 'px';  
//     }, 100)
// });
