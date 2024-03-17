window.addEventListener('scroll',function(){
    var element=document.getElementById('about');
    var pos=element.getBoundingClientRect();
    var windowheight=window.innerHeight;
    if(pos.top < windowheight){
        element.classList.add('visible');
        element.classList.remove('about');
    } 
});