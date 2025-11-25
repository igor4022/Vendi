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