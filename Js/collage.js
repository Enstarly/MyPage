const collage = document.getElementById("collage");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

// Cargar imágenes
for (let i = 1; i <= 210; i++) {
  const img = document.createElement("img");
  img.src = `./IMG/collage/${i}.jpeg`;
  img.alt = `Imagen ${i}`;
  img.addEventListener("click", () => {
    modalImage.src = img.src;
    modal.style.display = "flex";
  });
  collage.appendChild(img);
}

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImage.src = "";
  }
});
