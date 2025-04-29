function irPara(name){
    let info = document.getElementById(name);
    let rect = info.getBoundingClientRect();
    let y = rect.y
    window.scrollTo(0, y);
}