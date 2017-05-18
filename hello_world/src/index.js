import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';

var person = {
  personName: "Nick",
  personAge: 25
}

ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
  />,
  document.getElementById('root')
);
