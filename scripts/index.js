
function leEAdiciona(){
    let titulo = document.getElementById('titulo-card')
    let descricao = document.getElementById('descricao-card')
    let urlImagem = document.getElementById('url-imagem-card')
    let inserir = document.getElementById('inserir')
    
    inserir.addEventListener('click', (event)=>{
        if(!titulo.value){
            alert('preencha com o titulo')
        } else if(!urlImagem.value){
            alert('preencha com a url')
        }else{
            insereCard(titulo.value, descricao.value, urlImagem.value)
            insereTrocarImagem()
            limpaCampos(titulo, descricao, urlImagem)
            event.preventDefault()
        }
    })

}

function insereCard(titulo, descricao, urlImagem){
    let secao = document.querySelector('section')
    secao.innerHTML += `<div class='card'>
                            <img class='imagem-card' src="${urlImagem}">
                            <h3 class='texto-titulo-card'>${titulo}</h3>
                            <p class='texto-descricao-card'>${descricao}</p>
                            <button class="trocar-imagem">Trocar imagem</button>
                        </div>`
}

function insereTrocarImagem(){
    let botoes = document.querySelectorAll('.trocar-imagem')
    for(let botao of botoes){
        botao.addEventListener('click', trocarImagem)
    }
}

function trocarImagem(){
    let desejaTrocarImagem = confirm('Você deseja mesmo trocar a imagem deste card?')
    if(desejaTrocarImagem){
        let urlNovaImagem = prompt('Qual url da nova imagem que deseja inserir?')
        let imagem = this.parentElement.children[0]
        imagem.setAttribute('src', urlNovaImagem)
    }
}

function limpaCampos(titulo, descricao, imagem){
    titulo.value = ''
    descricao.value = ''
    imagem.value = ''
}

leEAdiciona()

