//cojo el documento.
const themeToggle = document.getElementById("theme-toggle");

// Función para poner el tema claro u oscuro
function setTheme(theme) {
  const body = document.body;
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(theme);
  localStorage.setItem("theme", theme); // Guarda el tema en localStorage, esto me lo ha enseñado chatgpt
}

// Al cargar la página, aplica el tema guardado
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light-theme"; // Por defecto, "light-theme"
  setTheme(savedTheme);
});

// Al hacer clic en el botón, cambia el tema
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";
  setTheme(currentTheme);
});
