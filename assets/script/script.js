const apriContatti = document.querySelector("#apri-contatti");
const chiudiContatti = document.querySelector("#chiudi-contatti");
const overlayContatti = document.querySelector("#overlay-contatti");

apriContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlayContatti.removeAttribute("hidden");
});

chiudiContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlayContatti.setAttribute("hidden", "");
});

overlayContatti.addEventListener("click", (evento) => {
    if (evento.target === overlayContatti) {
        overlayContatti.setAttribute("hidden", "");
    }
});