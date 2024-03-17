const g = document.getElementById("nav");


function toggleMenuOpen() {
    g.classList.toggle("open");
}

window.addEventListener("resize", changesrc);
window.addEventListener("scroll", background);
changesrc();

var widt;
let row = document.getElementsByClassName("gyro");
let nrow = document.getElementsByClassName("gyros");
window.addEventListener("resize", calwidth);
calwidth();

var wid;

function changesrc() {
    wid = window.innerWidth;
    var vid = document.getElementById("hero");
    var bgp = document.getElementById("event");
    // console.log(vid.src);
    if (wid > 430) {
        vid.src = 'https://dg08k1ljsj5r8.cloudfront.net/ls4.mp4';
        bgp.style.backgroundImage='https://dg08k1ljsj5r8.cloudfront.net/hero2.png';
    } else {
        vid.src = 'https://dg08k1ljsj5r8.cloudfront.net/ls5.mp4';
        bgp.style.backgroundImage='https://dg08k1ljsj5r8.cloudfront.net/hero2.png';
    }
}

function background() {
    if (document.body.scrollTop > 70) {
        g.style.background = '#1b1023';
    } else {
        g.style.background = 'transparent';
    }
}

function calwidth() {
    widt = window.innerWidth;
    row[0].className = row[0].className.replace("row-cols-3", "");
    row[0].className = row[0].className.replace("row-cols-2", "");
    row[0].className = row[0].className.replace("row-cols-1", "");

    nrow[0].className = row[0].className.replace("row-cols-3", "");
    nrow[0].className = row[0].className.replace("row-cols-2", "");
    nrow[0].className = row[0].className.replace("row-cols-1", "");
    if (widt < 1000 && widt > 500) {
        row[0].className += "row-cols-2";
        nrow[0].className += "row-cols-2";
    } else if (widt < 500) {
        row[0].className += "row-cols-1";
        nrow[0].className += "row-cols-1";
    } else if (widt > 1000) {
        row[0].className += "row-cols-3";
        nrow[0].className += "row-cols-3";
    }
}


