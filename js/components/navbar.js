// Lógica par cargar el componente navbar

document.addEventListener("DOMContentLoaded", function (){
    const navbarElement = document.querySelector(".navbar-container")

    if (!navbarElement) return;

    fetch("/components/navbar.html")
    // La respuesta la convierte a texto plano
    .then(Response => Response.text())
    // Inserta el contenido html del navbar en el contenedor correspondiente
    .then(data => {
        navbarElement.innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop() ||
        "index.html"

        const navlinks = navbarElement.querySelectorAll(".navbar__link")

        navlinks.forEach(link =>{
            // Verifica si el href del enlace incluye el nombre de la pagina actual
            if (link.getAttribute("href").includes(currentPage)) {
                link.classList.add("active")
            }
        })

        .catch(error => console.error("Error cargando el navbar", error));
    })
})