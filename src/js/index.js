/*
    Quando clicar no pokémon da listagem 
        Esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    Esconder

    Pra isso vamos trabalhar com dois elementos
        1 - listagem
        2- cartão do pokemon
    Elementos

    Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

    Vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokémons
        - remover a classe "aberto" só do cartão que está aberto
        - ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        - remover a classe "ativo" que marca o pokémon selecionado
        - adicionar a classe "ativo" no item da lista selecionado
    Click
*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
    // querySelectorAll selecionou todas as classes .pokemon para trabalhar com todos os elementos com essa classe
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um evento de click feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        // Remover a classe "aberto" só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // Remover a classe "ativo" que marca o pokémon selecionado em vermelho
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar a classe "ativo" no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})