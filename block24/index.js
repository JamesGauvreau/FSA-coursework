console.log(`test`)

{

    React.useEffect(() => {
        const fetchPokemon = async() => {
            const dog = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await response.json();
            const allPokemon = data.results;
            setPokemonList(allPokemon);
        }

        fetchPokemon();
    }, []);

    return (
        <section>
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((singlePokemon) => {
                    return <li> key={singlePokemon.name}>{singlePokemon.name}</li>
                })
            }
            </ul>
        </section>
    )
        
        }

        const root = ReactDOM.createRoot(container);