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
            setTimeout(() => {

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Pokémon encontrado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                imgPokemon.src = pokemon.sprites.front_default;
                namePokemon.textContent = pokemon.species.name
            }, 1000)

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
