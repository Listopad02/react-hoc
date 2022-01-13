import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const starWarsChars = [
  { name: 'Darth Wader', side: 'dark' },
  { name: 'Luke Skywalker', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Obi-Wan Kenobi', side: 'light' }
]

const App = ({list}) => (
  <ul>
    { list.map((char, i) => {
      return (
        <li key={char.name + i}>
          <strong>{char.name}</strong> - &nbsp;
          { char.side }
        </li>
      )
    }) }
  </ul>
)


const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list={starWarsChars} side="dark" />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
