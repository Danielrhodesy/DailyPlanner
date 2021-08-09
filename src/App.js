import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';

const DayContainer = styled.h1`
  height: 800px;
  width: 400px;
  background-color: lightblue;
`;

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Daily Planner
        </h1>
      </header>
      <section>
        <h2>Day</h2>
        <DayContainer>

        </DayContainer>
      </section>
    </div>
  );
}

export default App;
