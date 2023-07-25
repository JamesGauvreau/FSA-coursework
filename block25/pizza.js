const container = document.querySelector(`#root`);

const App = () => {
    const pizzas = [
        {
            id: 1,
            name: `Pepperoni`,
            toppings: [
                `cheese`,
                `pepperoni`,
            ]
        },
        {
            id: 2,
            name: `Hawaiian`,
            toppings: [
                `pineapple`,
                `canadian bacon`,
                `cheese`,
                `white onions`,
            ]   
        },
        {
            id: 3,
            name: `Canadian`,
            toppings: [
                `poutine`,
                `maple leaf`,
                `syrup`,
            ]
        }
    ]

    return (
        <>
        <h1>Pizza Jon's</h1>
        <h3># of Pizza Orders</h3>

        <ul>
        {
            pizzas.map((pizza) => {
                console.log(pizza);
                return (
                    <Pizza 
                        singlePizza={singlePizza}/> 
                )
            })
        }
        </ul>
        </>
    )
}

const Pizza = (props) => {
    console.log(props)
    const singlePizza = props.singlePizza;
    return (

                <>
                <h3 key={pizza.id}>{pizza.name}</h3>
                {pizza.toppings.map((topping) => {
                    return <li key={topping}>{topping}</li>
                    // return (
                    //     <>
                    //     <p>{pizza.topping}</p>
                    //     </>
                    // )
            })
        }
                </>
                )
            }
        
const root = ReactDOM.createRoot(container);
root.render(< App />);
// console.log(root); 


// You usually don't need to complete the whole interview question in order to
// succeed. You need to demonstrate a correct thought process. It's possible to
// solve the question without succeeding. 

// Console.log as you go. 

// Write e.g. (<App />) rather than (App) so that React doesn't think that "App" is a variable. 