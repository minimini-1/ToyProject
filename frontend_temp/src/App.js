import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import Name from './components/name'
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragment from './components/MyFragment';
import ComponentA from './components/ComponentA';
import { useState, useEffect } from 'react';

export const MyContext = React.createContext()

function App() {

  const [articles, setArticles] = useState(['Aritcle One', 'Article Two'])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/',{
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 4c72e0553c39632b646403c3ec23b61d4998a0dd'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))

  }, [])

  return (
    <div className="App">

        <h3>Django And ReactJS Blog App</h3>
        {articles.map(article => {
          return <h2>{article.title}</h2>
          })}
    </div>
  );
}

export default App;
