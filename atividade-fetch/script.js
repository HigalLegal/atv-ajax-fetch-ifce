const exibirCarros = () => {
    const requisicao = fetch("https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json");

    requisicao
        .then(logos => logos.json())
        .then(logos => {
            logos.forEach(logo => {
                const liLogo = document.createElement("li");
                const imagemLogo = document.createElement("img");
                
                imagemLogo.src = logo.image.optimized;

                liLogo.appendChild(imagemLogo);
                document.querySelector(".carros > ul").appendChild(liLogo);
            });
        })
        .catch(error => {
            alert("Erro na requisição.")
            console.log(error);
        })
}

const botaoExibir = document.getElementById("exibir-carros");
botaoExibir.addEventListener("click", exibirCarros);