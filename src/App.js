import {useEffect, useState} from 'react';

// UI Components
import DogDisplay from './components/DogDisplay';


// Library Components
import logo from './logo.svg';

// Style Components
import './App.css';

function App() {
  // state
  const [dog, setDog] = useState("");
  // Function to get dog
  const getDog = async () => {
    // make retch request and store them
    const response = await fetch (
      `https://dog.ceo/api/breeds/image/random`
    );
    // parse JSON response into a javascrip obj
    const data = await response.json();
    setDog(data);
    console.log(data)
  }
  useEffect(() => {
    getDog()
  }, []);

  return (
    <div className="App">
      <DogDisplay dog={dog}/>
      <button onClick={getDog}>Get Cuteness</button>
    </div>
  );
}

export default App;
