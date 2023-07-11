console.log(`confirm`)

const nameBox = `John`

const logAge = async() => {
    const response = await fetch(`https://api.agify.io?name=${nameBox}`);
    const age = await response.json();
    console.log(`Name: ${age.name}. Age: ${age.age}`);
}

const choosePoke = `bulbasaur`

const getPokemon = async() => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${choosePoke}`);
    const pokemon = await response.json();
    return console.log();
    // console.log(`Name: ${pokemon.name}`);
}

const textAge = logAge();

console.log(textAge)
console.log(getPokemon)

getPokemon()
