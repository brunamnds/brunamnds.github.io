const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';


// Função que cria os cards dos filmes
function MostraFilmesEmCartaz () {
    //Executar requisição AJAX

    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '5ed8c90f07b54f0047b5086860d3f166',
            language: "pt-BR"
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i=0; i < 2; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;

                codigo_html += `<div class="card mb-3" ><div class="card" style="width: auto;">
                    <img src="${imagem}" class="card-img-top" class="mt-10" alt="Card image cap"
                        alt="${titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">${descricao}</p>
                    </div>
                    <div class="card-footer">
      <small class="text-muted">Última Atualização a 3 Minutos</small>
    </div>
                </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });

}

function PesquisaFilmes () {
    $.ajax({
        // Passar a URL ENDPOINT BASE + /movie/now_playing
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: '5ed8c90f07b54f0047b5086860d3f166',
            query: $("#search").val(),
            language: "pt-BR",
        }
    })
        // Receber o JSON
        .done(function (data) {

            let codigo_html = '';

            // Montar os cards
            for (i=0; i< 2; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;

                codigo_html += `<div class="row-cols-lg-1" ><div class="card" class="has-text-justified" style="width: 18rem;">
                    <img src="${imagem}" class="card-img-top"
                        alt="${titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${titulo}</h5>
                        <p class="card-text">${descricao}</p>
 
                    </div>
                </div></div>`;
            }


            // Repassar os cards para a página
            $('#lista_filmes').html(codigo_html)

        });
}


$( document ).ready(function () {

    MostraFilmesEmCartaz ();

    $('#btn_Pesquisar').click (PesquisaFilmes);
});