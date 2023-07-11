const dogs = [
    {
      color: `red`,
      size: `md`
    },
    {
      color: `green`,
      size: `lg`
    }
  ];

const cats = [
    {
        color: `blue`,
        size: `sm`,
    },
    {
        color: `orange`,
        size: `xl`,
    }
];
 
  const render = () => {
    const htmlSquare = dogs.map((square) => {
      return `<div class='${square.color} ${square.size}'></div>`;
    }).join(``);
  
    document.querySelector(`.ferret`).innerHTML = htmlSquare;

    const htmlCircle = cats.map((circle) => {
        return `<div class='${circle.color} ${circle.size}'></div>`;
      }).join(``);
    
    document.querySelector(`.circle`).innerHTML = htmlCircle;

  }
  
  render();
  
  const interval = setInterval(() => {
    const color = [`red`, `green`, `blue`, `orange`][Math.floor(Math.random()  * 2)];
    const size = [`sm`, `md`, `lg`, `xl`][Math.floor(Math.random() * 3)];
  
    dogs.push({ color, size });
    cats.push({ color, size });
    render();
  
    if(dogs.length === 10) {
      clearInterval(interval);      
    }
  }, 1000);
