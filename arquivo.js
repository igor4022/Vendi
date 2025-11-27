function pesquisar(){

    let enviar = document.getElementById('pesquisa').value
    enviar = enviar.toLowerCase()
    let valor = document.getElementsByClassName('valor')

    for(i = 0; i < valor.length; i++){
        if(!valor[i].innerHTML.toLowerCase().includes(enviar)) {
            valor[i].style.display = "none"

        } else {
            valor[i].style.display = pesquisa.innerHTML
        }
    }
}

// Parte que ativar a aria de navagar ns listas...

const navegar = document.querySelector(".navegar")
const nav = document.querySelector(".nav")

navegar.addEventListener("click", () => nav.classList.toggle("ativar"))