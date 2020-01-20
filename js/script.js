let buttonClick = document.getElementById('btn')
let board = document.getElementById('board');

buttonClick.addEventListener('click', async ()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=d742a6e548994e35b6edc12d296162e4")
    .then(response=> response.json())
    .then(json=>{
           console.log(json.articles)
            mostrarNaTela(json.articles);
    })

 // let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=d742a6e548994e35b6edc12d296162e4")).json();
    
  //mostrarNaTela(await listaNoticias)

})

let mostrarNaTela = listaNoticias =>{

    listaNoticias.forEach(function(noticia, posicao){

        let card = ` <div id="board" class="row">
 <div class="card" style="width: 18rem;">
     <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">${noticia.title}</h5>
             <p class="card-text">${noticia.description}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
 </div>`
 board.innerHTML += card;
    })
 


}

