import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [resultFetch, setResultFetch] = useState({})

  useEffect(() => {
    requestFetch();
  }, [])

  const requestFetch = async () => {
    const response = await fetch("https://rickandmortyapi.com/api");
    const result = await response.json();
    setResultFetch(result)
  }

  return (
    <div className="App">
      <p>{resultFetch.episodes}</p>
    </div>
  );
}

export default App;
