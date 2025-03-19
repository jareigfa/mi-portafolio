document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("typed-heading");

    // Animación texto
    const text1 = "Hello, World!\n"; 
    const text2 = "Soy ";
    const text3 = "J";
    const text4 = "avier";

    // Variables progreso animación
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;

    // Función primera parte del texto
    function typeWriter1() {
        if (index1 < text1.length) {
            heading.innerHTML += text1.charAt(index1);
            index1++;
            setTimeout(typeWriter1, 100);
        } else {
            setTimeout(typeWriter2, 100);
        }
    }

    // Función segunda parte del texto
    function typeWriter2() {
        if (index2 < text2.length) {
            heading.innerHTML += text2.charAt(index2);
            index2++;
            setTimeout(typeWriter2, 100);
        } else {
            setTimeout(typeWriter3, 100);
        }
    }

    // Función tercera parte del texto
    function typeWriter3() {
        if (index3 < text3.length) {
            heading.innerHTML += `<span class="j-letter">${text3.charAt(index3)}</span>`;
            index3++;
            setTimeout(typeWriter3, 100);
        } else {
            setTimeout(typeWriter4, 100);
        }
    }

    // Función cuarta parte del texto
    function typeWriter4() {
        if (index4 < text4.length) {
            heading.innerHTML += text4.charAt(index4);
            index4++;
            setTimeout(typeWriter4, 100);
        }
    }

    // Inicia la animación
    typeWriter1();

    // Scroll suave
    const links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});