// Recupera dalla pagina i pulsanti e l'overlay del modal.
const apriContatti = document.querySelector("#apri-contatti");
const chiudiContatti = document.querySelector("#chiudi-contatti");
const overlayContatti = document.querySelector("#overlay-contatti");

// Mostra il modal e blocca lo scorrimento della pagina sottostante.
apriContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlayContatti.removeAttribute("hidden");
});

// Nasconde il modal e ripristina lo scorrimento della pagina.
chiudiContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlayContatti.setAttribute("hidden", "");
});


// Chiude il modal solo se il click avviene sullo sfondo,non sul riquadro del form.
overlayContatti.addEventListener("click", (e) => {
    if (e.target === overlayContatti) {
        overlayContatti.setAttribute("hidden", "");
    }
});