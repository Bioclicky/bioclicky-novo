// Menu mobile e alternância de tema da página de resultados.
const menuButton = document.querySelector(".remedios-menu");
const nav = document.querySelector(".remedios-nav");
const actions = document.querySelector(".remedios-actions");

if (menuButton && nav && actions) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("home-nav-active");
        actions.classList.toggle("home-actions-active");
    });
}

const lightButton = document.querySelector(".home-theme-light");
const darkButton = document.querySelector(".home-theme-dark");

function aplicarTema(tema) {
    document.body.classList.toggle("home-light-mode", tema === "claro");
    try { localStorage.setItem("bioclicky-tema", tema); } catch (erro) {}
}

try {
    aplicarTema(localStorage.getItem("bioclicky-tema") || "escuro");
} catch (erro) {
    aplicarTema("escuro");
}

if (lightButton) lightButton.addEventListener("click", () => aplicarTema("claro"));
if (darkButton) darkButton.addEventListener("click", () => aplicarTema("escuro"));
