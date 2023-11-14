const buscarGato = e => {
    e.preventDefault();

    const requisicao = new XMLHttpRequest();

    requisicao.open("GET", "https://api.thecatapi.com/v1/images/search?limit=10");
    requisicao.onreadystatechange = () => {
        if(requisicao.readyState == 4) {
            if(requisicao.status == 200) {
                const gatos = JSON.parse(requisicao.responseText);

                gatos.forEach(gato => {

                    const divImagens = document.createElement("div");
                    const imagem = document.createElement("img");
                    const tamanhoH3 = document.createElement("h3");
                    
                    imagem.src = gato.url;
                    tamanhoH3.innerText = `${gato.width} x ${gato.height}`

                    divImagens.appendChild(imagem);
                    divImagens.appendChild(tamanhoH3);
                    divImagens.classList.add("div-imagens")

                    document.getElementById("gatos").appendChild(divImagens);

                });
            } else {
                alert("ERRO NA REQUISIÇÃO");
            }
        }
    }
    requisicao.send();
}

const botaoDeMostrar = document.getElementById("mostrar-gatos")
botaoDeMostrar.addEventListener("click", buscarGato);
