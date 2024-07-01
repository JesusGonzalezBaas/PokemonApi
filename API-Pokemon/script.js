async function fetchPokemon() {
    // Obtener el nombre del Pokémon ingresado por el usuario y convertirlo a minúsculas
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonInfoDiv = document.getElementById('pokemonInfo');
    pokemonInfoDiv.innerHTML = '';

    try {
        // Realizar la solicitud a la PokeAPI con el nombre del Pokémon en minúsculas
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const pokemonData = await response.json();

        // Construir el HTML con la información del Pokémon
        const pokemonHTML = `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <p><strong>Altura:</strong> ${pokemonData.height}</p>
            <p><strong>Peso:</strong> ${pokemonData.weight}</p>
            <p><strong>Tipos:</strong> ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        `;
        pokemonInfoDiv.innerHTML = pokemonHTML;
    } catch (error) {
        pokemonInfoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}
