fetchPokemon();
async function fetchPokemon() {
  const pokemonName = document.getElementById("pokemonName").value;
  console.log(pokemonName);
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new error("No data available");
    }

    const data = await response.json();
    const img = data.sprites.front_default;
    const imgelement = document.getElementById("pokemonImg");
    imgelement.src = img;
    imgelement.style.display = "block";
  } catch (error) {
    console.log(error);
  }
}
