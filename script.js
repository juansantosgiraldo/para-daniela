// ===============================
// ELEMENTOS
// ===============================
const giftButton = document.getElementById("giftButton");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const particles = document.getElementById("particles");
const musica = document.getElementById("musicaFondo");

// ===============================
// INICIAR ROSAS CAYENDO
// ===============================
crearRosas();

// ===============================
// ABRIR REGALO Y REPRODUCIR MÚSICA
// ===============================
giftButton.addEventListener("click", () => {
    inicio.style.display = "none";
    contenido.classList.remove("hidden");

    // Iniciar la canción de fondo
    if (musica) {
        musica.play().catch(error => {
            console.log("El navegador bloqueó la reproducción automática:", error);
        });
    }

    lanzarConfeti();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// ROSAS CAYENDO
// ===============================
function crearRosas(){
    const figuras = ["🌹"]; 

    setInterval(()=>{
        if (!particles) return;

        const elemento = document.createElement("div");
        elemento.className = "rose";
        
        elemento.innerHTML = figuras[0];
        
        elemento.style.left = Math.random() * 100 + "vw";
        elemento.style.fontSize = (20 + Math.random() * 25) + "px";
        elemento.style.animationDuration = (5 + Math.random() * 5) + "s";

        particles.appendChild(elemento);

        setTimeout(()=>{
            elemento.remove();
        }, 10000);
    }, 350); 
}

// ===============================
// CONFETI
// ===============================
function lanzarConfeti(){
    const colores = ["#FFD54F", "#ffffff", "#c084fc", "#8b5cf6", "#f9a8d4"];

    for(let i = 0; i < 180; i++){
        const confeti = document.createElement("div");
        confeti.style.position = "fixed";
        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.top = "-20px";
        confeti.style.width = "8px";
        confeti.style.height = "15px";
        confeti.style.background = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.borderRadius = "3px";
        confeti.style.zIndex = "999";
        confeti.style.transition = "all 4s linear";

        document.body.appendChild(confeti);

        setTimeout(()=>{
            confeti.style.transform =
            `translateY(${window.innerHeight + 100}px)
             rotate(${Math.random() * 720}deg)`;
        }, 50);

        setTimeout(()=>{
            confeti.remove();
        }, 4500);
    }
}

// ===============================
// EFECTO DE APARICIÓN
// ===============================
window.addEventListener("load", ()=>{
    document.body.style.opacity = "0";

    setTimeout(()=>{
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    }, 200);
});