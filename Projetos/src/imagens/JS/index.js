/* 
Quando clicar no pokemon da lista temos que esconder o cartao de pokemon aberto e mostrar o cartao correspondente selecionado

para isso vamos trabalhar com 2 elementos
listagem 
cartao pokemon

criar 2 variaves no js 

evento de click


*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')



const pokemonsCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemons.forEach(pokemon => { 

    pokemon.addEventListener('click', () => {

    const cartaoPokemonAberto = document.querySelector('.aberto')
     
    cartaoPokemonAberto.classList.remove('aberto')


   const idPokemonSelecionado = pokemon.attributes.id.value

   const idDoCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado

   const cartaoPokemonParaAbrir = document.getElementById( idDoCartaoPokemonParaAbrir)
     
   cartaoPokemonParaAbrir.classList.add('aberto')                    



const pokemonAtivoNaListagem = document.querySelector('.ativo')
pokemonAtivoNaListagem.classList.remove('ativo')



const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
pokemonSelecionadoNaListagem.classList.add('ativo')

    } )

})






