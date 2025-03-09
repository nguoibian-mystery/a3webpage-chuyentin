var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.classList.add('hide');
});

var hidebody = document.getElementById("hidebody");
window.addEventListener("load", function() {
    hidebody.classList.add('hide');
});

window.addEventListener("load", function() {
    loader.classList.add('hide');
});

window.addEventListener("load", function() {
    setTimeout(function() {
        hidebody.style.display = "none";
    }, 1250);
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 1250);
});