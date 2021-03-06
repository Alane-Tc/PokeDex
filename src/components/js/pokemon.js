//import { getPokemon } from './get-pokemon.js'
import {getPokemon} from './get-pokemon-min.js'

let imgPokemon = document.querySelector("#img_pokemon")
let namePokemon = document.querySelector("#id_pokemon")
let btnPokemon = document.querySelector("#btn_pokemon")
let inputPokemon = document.querySelector("#input_search")

const searchPokemon = async (id) => {
    try {
        const pokemon = await getPokemon(id)

        setTimeout(() => {

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Pokémon encontrado con éxito',
                backdrop: `rgb(9 79 167 / 40%)`,
                showConfirmButton: false,
                timer: 1500
            })

            imgPokemon.src = pokemon.sprites.front_default;
            namePokemon.textContent = pokemon.species.name;

        }, 1000)

        setTimeout(() => {
            Swal.fire({
                html: createHtml(pokemon),
                showConfirmButton: false,
                showCloseButton: true,
                background: '#ffc107',
                backdrop: `rgb(9 79 167 / 40%)`
            })

        }, 2500)

    } catch (error) {

        Swal.fire({
            title: 'Error!',
            text: `No existe el id o nombre: ${inputPokemon.value}`,
            icon: 'error',
            backdrop: `rgba( 208, 2, 27, 0.15 )`,
            confirmButtonText: 'Continuar'
        })
        console.clear()
        clearInput(inputPokemon)
    }
}


const createHtml = (pokemon) => {

    const objPokemon = {
        imagePokemon: pokemon.sprites.front_default,
        pokemonName: pokemon.species.name,
        atack: pokemon.stats[1].base_stat,
        defence: pokemon.stats[2].base_stat
    }

    let html = `
        <div class="box-img-modal">
            <img src="${objPokemon.imagePokemon}" alt="pokemon">
        </div>

        <section class="box-modal">

        <h1 id="modal_pokemon_name">${objPokemon.pokemonName}</h1>
        
        <div class="container">
        <div class="row align-items-center">

            <div class="col-6">
                <h4 class="text-left mt-3 class_decoration">Ataque</h4>
            </div>

            <div class="col">
                <h4 id="id_abilities" class="text-center mt-3 class_decoration">${objPokemon.atack}</h4>
            </div>

            <div class="col-6 mt-4">
                <h4 class="text-left class_decoration">Defensa</h4> <br>
            </div>

            <div class="col mt-4">
                <h4 class="text-center class_decoration">${objPokemon.defence}</h4> <br>
            </div> 
        </div>

        </div>
        
    </section>`
    return html
}

const searchInput = (input) => {
    if (input.value === "") {
        Swal.fire({
            title: 'Error!',
            text: `Algo salió mal, intentelo de nuevo`,
            icon: 'error',
            backdrop: `rgba( 208, 2, 27, 0.15 )`,
            confirmButtonText: 'Continuar'
        })
        input.value = ""
    } else {
        searchPokemon(input.value.toLowerCase())
    }
}

const clearInput = (input) => {
    input.value = ''
}

const init = () => {
    btnPokemon.addEventListener('click', function () { searchInput(inputPokemon) })
}

export {
    init
}

//})
