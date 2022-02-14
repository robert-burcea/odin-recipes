var img = document.getElementById("image");
function transform() {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}
function reset() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
}