

window.addEventListener('scroll', function () {
    if (!((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight)) <= 1)) {
        document.getElementById('opText').style.fontSize = (Math.max(18 - window.scrollY / 20)) + 'px';
        document.getElementById('opText').style.opacity = Math.max(0, 1 - window.scrollY / 500);
        document.getElementById('fol').style.marginTop = (100 - (window.scrollY / (window.innerHeight / 100))) + 'dvh';
        document.querySelector('.title').style.backgroundPositionY = (window.scrollY * (window.innerHeight / 4000)) + 'px';
    }
});

let active = true;
function navActive() {
    const navbut = document.getElementById('navbut');
    navbut.onclick = null;
    if (active) {
        document.getElementById('ln1').classList.toggle('topmv');
        document.getElementById('ln2').classList.toggle('trr');
        document.getElementById('ln3').classList.toggle('trl');
        document.getElementById('ln4').classList.toggle('botmv');
        document.querySelector('.conbefore').classList.toggle('con');
        setTimeout(() => {
            document.querySelector('.navcontbefore').classList.toggle('navcontfirst');
            setTimeout(() => {
                document.querySelector('.navcontbefore').classList.toggle('navcont');
                document.querySelectorAll('.navlink').forEach(link => {
                    link.classList.toggle('gn');
                });
                navbut.onclick = navActive;
            }, 1000);
        }, 1000);
        active = false;
    } else {
        document.getElementById('ln1').classList.toggle('topmv');
        document.getElementById('ln2').classList.toggle('trr');
        document.getElementById('ln3').classList.toggle('trl');
        document.getElementById('ln4').classList.toggle('botmv');
        document.querySelector('.navcontbefore').classList.toggle('navcont');
        setTimeout(() => {
            document.querySelectorAll('.navlink').forEach(link => {
                link.classList.toggle('gn');
            });
            document.querySelector('.navcontbefore').classList.toggle('navcontfirst');

            setTimeout(() => {
                document.querySelector('.conbefore').classList.toggle('con');
                navbut.onclick = navActive;
            }, 500);
        }, 1000);
        active = true;
    }
}

