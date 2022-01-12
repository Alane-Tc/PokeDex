const header = (() =>{
    const header = document.querySelector("#navbar-header");

    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning border border-dark  justify-content-center"
    style="padding: 8px;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
            <img id="logo_header" src="src/assets/icons/entrenador-pokemon.png" alt="Logo" width="60px"
                height="60px">
            <span id="title_logo">¿Quién es ese pokémon?</span>
        </a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#poke-deck">Inicio</a>
                </li> -->
            </ul>
        </div>
    </div>
</nav>`
})