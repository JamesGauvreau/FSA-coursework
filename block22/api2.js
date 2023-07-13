console.log(`confirm`)

const kanye = async() => {
    const responseKanye = await fetch (`https://api.kanye.rest`);
    const dog = await responseKanye.json();
    const pokeNum = dog.quote.length;
    const responsePokemon = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokeNum}`);
    const cat = await responsePokemon.json();
    const Cat = cat.name.charAt(0).toUpperCase() + cat.name.slice(1); 
    document.querySelector(`#htmlKanye`).innerHTML = `"${dog.quote}" <br><br> - ${Cat}, probably`;

}

const button = document.querySelector(`button`);
const callButton = () => {
    console.log(`button confirmed`);
}

const magicNumber = () => {
    const numRando = Math.random()
    const numBig = numRando * 1000
    const numFlat = Math.floor(numBig)
    document.querySelector('#MTG').innerHTML = `<img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${numFlat}&type=card">`
}

kanye()
magicNumber()



button.addEventListener(`click`, kanye)
button.addEventListener(`click`, magicNumber)