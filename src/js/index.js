/*
OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão pokedev aberto
e mostrar o cartão correspondente ao que foi selecionado a listagem 
PASSO 1 - precisamos  criar uma variávelno JS para trabalar com alistagem de pokedevs 
PASSO 2 - identificar o evento de clique no elemento da listagem 
PASSO 3 - remover a classe aberto só do cartão que tá aberto
PASSO 4 - ao clicar em um pokedev da listagem  pegamos o id desse pokedev para saber qual cartão abrir
PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
PASSO 6 - adicionar a classe ativo no pokedevse lecionado nas listagem 
*/

//PASSO 1 - precisamos  criar uma variávelno JS para trabalar com alistagem de pokedevs 
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - identificar o evento de clique no elemento da listagem 
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {


        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();

        //PASSO 4 - ao clicar em um pokedev da listagem  pegamos o id desse pokedev para saber qual cartão abrir
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();

        //PASSO 6 - adicionar a classe ativo no pokedevse lecionado nas listagem 
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
