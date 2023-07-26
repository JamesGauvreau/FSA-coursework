import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Hello from useEffect");
  }, [count]);
      // The empty dependency array makes sure that this effect is run only ONCE after the component mounts.
      // Even though this is the same behavior you observed previously with no
      // dependency array, this time, we are deliberately telling our useEffect
      // to watch specifically for the count variable to change.


  return (
    <>
      <div>
      </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
