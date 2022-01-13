import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  state = {
    starWarsChars: [
      { name: 'Darth Wader', side: 'dark' },
      { name: 'Luke Skywalker', side: 'light' },
      { name: 'Darth Sidious', side: 'dark' },
      { name: 'Obi-Wan Kenobi', side: 'light' }
    ]
  }

  render() {
    return (
      <ul>
        { this.state.starWarsChars.map((char, i) => {
          return (
            <li key={char.name + i}>
              <strong>{char.name}</strong> - &nbsp;
              { char.side }
            </li>
          )
        }) }
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
