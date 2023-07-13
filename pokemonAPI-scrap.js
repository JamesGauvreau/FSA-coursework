// How do you edit all instances of a variable at once?

// const getPokemon = async() => {
//     try {
//         const response = await fetch(`https:pokeapi.co/api/v2/pokemon`);
//         const data = await response.json();
//         const pokemonTotal = data.results;
//         // console.log(pokemonTotal);
//         const pokemonNames = pokemonTotal.map((pokemon) => {
//             return pokemon.name
//             // return `<li>${pokemon.name}</li>`;
//         })
//         render(pokemonNames)
//         console.log(pokemonNames)
//         document.querySelector(`ul`).innerHTML=pokemonNames.join(``)
//     }   
// }

const getUl = document.querySelector(`ul`);

const pokemonCatch = async() => {
    try {
    const pokemonDog = await fetch('https:pokeapi.co/api/v2/pokemon');
    const pokemonData = await pokemonDog.json()
    const pokemonTotal = pokemonData.results;
    return pokemonTotal;
    // const pokemonNames = pokemonTotal.map((pokemon) =>{
    //     return pokemon.name})
    //     console.log(pokemonNames)
    //     render(pokemonNames)
    }
    catch (error) {
        const message = `you messed up`
        console.log(message)
    }
}

const pokemonRenderAll = async () => {
    const pokeList = await pokemonCatch();
    const datalist = await pokeList;
    

    const nameList = datalist.map((arr) => {
        const a1 = arr.url.split(`/`);
        const a2 = a1[6];
        return `<a href=" data-link-num="${a2}"><li>${arr.name}</li></a>`
    }).join('');
    getUl.innerHTML = `${nameList}`;
}

const displayPokeDetails = async () => {
    const getA = document.querySelectorAll('a')
    console.log("Test")
    console.log(getA)

    for(let i = 0; i < getA.length; i++) {
        console.log(getA[i]);
        getA[i].addEventListener(`click`, async (e) => {
            e.preventDefault();
            const num = getA[i].dataset.linkNum
            const indPoke2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const PokeAPIResponse2 = await indPoke2.json();
            console.log("Test2")
        })
    }
};

const init = async () => {
    await pokemonRenderAll();
    await displayPokeDetails();
}

init()



// const render = (pokemonNames) => {
//     const ul = document.querySelector(`ul`);
//     for (i in pokemonNames){
//         ul.innerHTML += ``

// const render = (pokemonNames) => {
//     const pokemonLis = pokemonNames.map((singlePokemon) => {
//         const splitURL = singlePokemon.url.split(`/`);
//         const pokemonId = splitURL[6];
//         return `<li>
//             <a href="" data-number="{pokemonID}">${singlePokemon.name}</a>
//             </li>`;
//     });
//     const ul = document.querySelector(`ul`);
//     ul.innerHTML = pokemonLis.join(``);
// }

// const addLinkEventListeners = () => {
//     const links = document.querySelectorAll(`a`);
//     for(let i = 0; i < links.length; i++) {
//         const link = links[i];
//         link.addEventListeneer(`click`, async(event) => {
//             event.preventDefault();
//             await getSinglePokemon(link.dataset.number);
//         })}}

// const getSinglePokemon = async(pokemonNumber) => {
//     const response = await fetch(`https:pokeapi.co/api/v2/pokemon/${pokemonNumer}`);
//     const data = await response.json();
//     renderPokemonDetails(data);
// }

// const renderPokemonDetails = (pokemonData) => {
//     const pre = document.querySelector(`pre`);
//     pre.innerText = JSON.stringify(pokemonData, null, 2);
// }

// const init = async() => {
// }

pokemonCatch()

// getPokemon()
