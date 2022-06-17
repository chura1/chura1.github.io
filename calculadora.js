// cargar el evento en una ventana
window.addEventListener("load", ()=>{
    // busco los botones y el resultado
    const botones = document.getElementsByClassName("boton")
    const result = document.querySelector(".resultado")
    // convieto la HTMLCollection a array para poder iterar
    const botonlista = Array.from(botones)
    // agregar un evento de click a cada boton
    // el forEach una simple iteracion en su  lugar
    botonlista.forEach((boton) =>{
        boton.addEventListener("click",() =>{
            calculadora(boton, result)
        })
    })
})
// llamar a una función cada vez que ocurra un click  
function calculadora(boton,result){
    switch (boton.innerHTML) {
        case "C":
            // si oprime C se borrará los resultados 
            borrar(result)
            break;
    
        case "=":
        // si oprime = se calcula la formula 
        calcular(result)
            break;
        
        default:
            // funcionara con los botones y el resultado 
            actualizar(result,boton)
            break;
    }
}
function calcular(result){
    // eval >> evalúa un código JS respresentado como una cadena de caracteres string
    // es el que hace la acción 
    result.innerHTML = eval(result.innerHTML)
}
function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}
function actualizar(result,boton){
    if(result.innerHTML == 0){
    result.innerHTML = ""
    }
    result.innerHTML += boton.innerHTML
}