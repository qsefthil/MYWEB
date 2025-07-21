function menu() {
    let nav = document.getElementById("nav");
    nav.style.display = "flex";
    nav.style.transform = "translateX(0)";
}

function unmenu() {
    let nav = document.getElementById("nav");
    nav.style.display = "none";
    nav.style.transform = "translateX(-100%)";
}
