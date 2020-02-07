const API_KEY = "331f7db01b024c7ba8ffdddb986c18c1";

let config = {
    method: "GET"
}

let board = document.querySelector("#board")
let btnCarregar = document.querySelector("#carregar")

btnCarregar.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            mostrarNaTela(json.articles)
        })
}

function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach((noticia) => {
        let novaNoticia = `<div class="col-md-4">
                <div class="card cardNoticia">
                    <img src="${noticia.urlToImage}" class="card-img-top" alt="imagem noticia">
                    <div class="card-body text-justify">
                        <h3 class="title">${noticia.title}</h3>
                        <p class="card-text">${noticia.description}</p>
                    </div>
                </div>
            </div>`
        board.insertAdjacentHTML("beforeend", novaNoticia)
    });
}
