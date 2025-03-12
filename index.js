let checkbox = document.getElementById("ativa")
let box = document.querySelector(".box")
let borda = document.getElementById("Borda")
let tamanho = document.getElementById("Tamanho")
let cordacaixa = document.getElementById("cordacaixa")
let fonte = document.getElementById("Fonte")
let cordefundo = document.getElementById("cordefundo")
let titulo = document.getElementById("titulo")



titulo.addEventListener("keyup", () => {

    let title = document.getElementById("title")
    valor = titulo.value
    title.innerHTML = valor
    if(valor == "") {
        title.innerHTML = "Manipulador de site"
    }    
})

cordefundo.addEventListener("input", () => {
    document.body.style.backgroundColor = cordefundo.value
})


borda.addEventListener("keyup", () => {
    valor = borda.value
    box.style.borderRadius = `${valor}px`
    if (valor == ""){

        box.style.borderRadius = "14px"
    }
})
tamanho.addEventListener("keyup", () => {
    let larguraBase = 800;
    valor = tamanho.value
    if (valor > 999){
        valor = 999
    }
    box.style.width = `${larguraBase + Number(valor)}px`
})
cordacaixa.addEventListener("input", () => {

    box.style.backgroundColor = cordacaixa.value
})
fonte.addEventListener("keyup", () => {

    valor = fonte.value
    document.body.style.fontFamily = valor

})



function trocacor() {

    let mate = Math.random() * 200
    let mate2 = Math.random() * 210
    let mate3 = Math.random() * 230
    let random = `rgb(${mate}, ${mate2}, ${mate3})`

    document.body.style.backgroundColor = random

}





let time;



function ativar() {
    
    if (checkbox.checked){
        
        time = setInterval(trocacor, 3000)
        trocacor()
    }else{
        clearInterval(time)
    }
}

checkbox.addEventListener("change", ativar)


