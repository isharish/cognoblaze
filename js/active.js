window.addEventListener("scroll", scrollfunc);

let home = document.getElementById("link1");
let about = document.getElementById("link2");
let events = document.getElementById("link3");
let contact = document.getElementById("link4");



function scrollfunc() {
    let widths = window.innerWidth;
    home.className = home.className.replace(" active", "");
    about.className = about.className.replace(" active", "");
    events.className = events.className.replace(" active", "");
    
    contact.className = contact.className.replace(" active", "");
    
    if (widths > 430 && widths<=1020) {
        if (document.body.scrollTop >= 0 && document.body.scrollTop <= 700) {
            home.className += ' active';
        } else if (document.body.scrollTop > 700 && document.body.scrollTop <= 1240) {
            about.className += ' active';
        } else if (document.body.scrollTop > 1240 && document.body.scrollTop <= 3250) {
            events.className += ' active';
        } else if (document.body.scrollTop > 3250) {
            contact.className += ' active';
        }
    }else if(widths>1020) {
        if (document.body.scrollTop >= 0 && document.body.scrollTop <= 700) {
            home.className += ' active';
        } else if (document.body.scrollTop > 700 && document.body.scrollTop <= 1240) {
            about.className += ' active';
        } else if (document.body.scrollTop > 1240 && document.body.scrollTop <= 2800) {
            events.className += ' active';
        } else if (document.body.scrollTop > 2800) {
            contact.className += ' active';
        }
    }else {
        if (document.body.scrollTop >= 0 && document.body.scrollTop <= 670) {
            home.className += ' active';
        } else if (document.body.scrollTop > 670 && document.body.scrollTop <= 1450) {
            about.className += ' active';
        } else if (document.body.scrollTop > 1450 && document.body.scrollTop <= 5150) {
            events.className += ' active';
        } else if (document.body.scrollTop > 5150) {
            contact.className += ' active';
        }
    }
}
