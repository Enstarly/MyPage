document.getElementById("button-teamo").addEventListener("click", function () {
  window.open("Teamo.html", "_blank");
});

document.querySelectorAll(".photos").forEach(function(image) {
  image.addEventListener("click", function () {
    window.open(this.src, "_blank");
  });
});

document.getElementById("img-view").addEventListener("click", function () {
  window.open("carta.html", "_blank");
});

document.getElementById("buttonPhotos").addEventListener("click", function () {
  window.open("fotos.html", "_blank");
});
