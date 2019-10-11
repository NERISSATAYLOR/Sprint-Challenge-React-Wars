import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { Container, Row } from 'reactstrap';


const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setCharacters(response.results)
      }, [])
      .catch(err => console.log(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container>

      <h1 className="Header">React Wars</h1>
      <Row>
        {characters.map(character => {
          return (
            <CharacterCard
              key={character.name}
              name={character.name}
              height={character.height}
              birth_year={character.birth_year}
              homeworld={character.homeworld}
            />
          )
        })}
      </Row>
    </Container>
  );
}

export default App;
