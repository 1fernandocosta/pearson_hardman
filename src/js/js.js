//Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;


//Funções
function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        if (menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
        }
    }, 500);

}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}

//Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
    })
})
//DIMINUIU CÓDIGO PARA FICAR ''MENOR''
// menuBtn.addEventListener("click", (e) => {
//     menu.classList.add("menu-active");
// })

// closeMenuBtn.addEventListener("click", (e) => {
//     menu.classList.remove("menu-active");
// })

allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
})

//Inicialização
showSlides();










//PRIMEIRA CONFIGURAÇÃO

// const a235689 = "Fernando Costa de Morais"

// console.log(typeof a235689)

// const x = 10 // // number

// console.log(typeof x);

// const lista = [1, 2, 3] // // object - array

// console.log(typeof lista);

// const objeto = { name: "Fernando", age: 35 }; // // object

// console.log(typeof objeto);

// const y = true // // boolen

// console.log(typeof y);

//     // // Estrutura de condição
// if (2 > 4) {
//     console.log("2 é maior que 1")
// } else {
//     console.log("2 não é maior que 4")
// }

//     // // Estrutura de repetição
// const arr = ["a", "b", "c", "d", "e"]

//     // // length = qtd de elementos

//     // // i = i + 1

// for (let i = 0; i < arr.length; i++) {
//     console.log("O valor da repetição é: " + arr[i])
// }

// function soma(a, b) {
//     console.log(a + b);
// }

// soma(4, 5);

// soma(14, 54);

// soma(22, 11);

//     // // DOM

//     // // 1 - seleciona
// const brand = document.querySelector("#brand");

// console.log(brand);

//     // // 2 - evento

//     // // 3 - executa
// brand.addEventListener("click", function (event) {
//     console.log("event.target");

//     event.target.style.color = "blue"
// });