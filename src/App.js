import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> My Heading : {(540*340)/230+1000} </h1>
        <p> My First React Paragraph </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name= "Md Faizur Rahman Khan" profession= 'A Professional Web Developer'>  </Person>
        <Person name= 'Md. Riad Hossain' profession= 'Junior Designer'> </Person>
        <Person name='Md. Mahmudul Hasan' profession='Senior Graphics Designer'> </Person>
        <Person name='Md. Faruk Patowary' profession='Junior Civil Engineer'> </Person>


      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '4px solid cyan',
    margin: '10px',
    padding: '10px',
    width: '50%',
    backgroundColor: 'cyan'
  }
  return ( 
    <div style={personStyle}>
      <h1> Name: {props.name} </h1>
      <h3> {props.profession}   </h3>
    </div>

  ) 
}

export default App;
