const search = (() => {

    let imgPokemon = document.querySelector("#img_pokemon")
    let namePokemon = document.querySelector("#id_pokemon")
    let btnPokemon = document.querySelector("#btn_pokemon")
    let inputPokemon = document.querySelector("#input_search")

    const getPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data
    }

    const searchPokemon = async (id) => {
        try {
            const pokemon = await getPokemon(id)

            const objPokemon = {
                imagePokemon: pokemon.sprites.front_default,
                pokemonName: pokemon.species.name,
                atack: pokemon.stats[1].base_stat,
                defence: pokemon.stats[2].base_stat
            }

            setTimeout(() => {

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Pokémon encontrado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })

                imgPokemon.src = objPokemon.imagePokemon;
                namePokemon.textContent = objPokemon.pokemonName;

            }, 1000)

            setTimeout(() => {
                Swal.fire({
                    html: `
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
                    
                </section>`,
                    showConfirmButton: false,
                    showCloseButton: true,
                    background: '#ffc107',
                })

            }, 2500)

        } catch (error) {

            Swal.fire({
                title: 'Error!',
                text: `No existe el id o nombre: ${inputPokemon.value}`,
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
            console.clear()
            clearInput(inputPokemon)
        }
    }

    const searchInput = (input) => {
        if (input.value === "") {
            Swal.fire({
                title: 'Error!',
                text: `Algo salió mal, intentelo de nuevo`,
                icon: 'error',
                confirmButtonText: 'Continuar'
            })
            input.value = ""
        } else {
            searchPokemon(input.value)
        }
    }

    const clearInput = (input) => {
        input.value = ''
    }

    btnPokemon.addEventListener('click', function () { searchInput(inputPokemon) })

})
