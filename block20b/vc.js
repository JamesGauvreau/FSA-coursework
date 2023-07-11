const letters = [`a`, `b`, `c`, `c`];

const render = () => {
  let html = letters.map((letter) => {
    return `<span>${letter}</span>`;
  }).join(``);
  
  document.querySelector(`#output`).innerHTML = html;

  const countHTML = `Vowels: ${vowelCount} Consonants: ${consonantCount}`;
  document.querySelector(`count`).innerHTML = countHTML;
}

// function consonants(str) {
//     let countConsonants = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== `a` && str[i] !== `e` && str[i] !== `i` && str[i] !== `o` && str[i] !== `u` && str[i] !== `y`) {
//             countConsonants++;
//         }
//     }
//     return(countConsonants); 
// };

render();


document.querySelector(`#vowel-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  render();
});

document.querySelector(`#consonant-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  render();
});

document.querySelector(`#output`).addEventListener(`click`, (event) => {
  const idx = [...event.target.parentNode.children].indexOf(event.target);
  letters.splice(idx, 1);
  render();
});


