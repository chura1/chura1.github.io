// solo trabajo en la base a la clase carrusel
const carruseljs = document.querySelector(".carrusel")

let maxScrollLeft = carruseljs.scrollWidth - carruseljs.clientWidth
let intervalo = null
let step = 1

// como se va a ejecutar
const start = () =>{
    // tiempo que se ejecutará
    intervalo = setInterval(function(){
        // avanzará segun los pasos izquierda
        carruseljs.scrollLeft = carruseljs.scrollLeft + step
        // si llega a terminar regresará atrás
        if(carruseljs === maxScrollLeft){
            step = step * -1 
        } 
        else if(carruseljs.scrollLeft == 0) {
            step = step * -1
            }
        },10
    )
}

const stop = () =>{
    clearInterval(intervalo)
}
//  eventos que se darán con el mouse 
carruseljs.addEventListener("mouseover", () =>{
    stop();
})

carruseljs.addEventListener("mouseout", () =>{
    start();
})
start();