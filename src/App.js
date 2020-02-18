import React from 'react';
import './App.scss';
import './components/searchForm';
import SearchForm from './components/searchForm';
import GithubIcon from '../src/assets/images/icons8-github-60.png';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <a className="github-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/darius-maximus-girl/TabsFinder"><img src={GithubIcon} alt="github icon"></img></a>
    </div>
  );
}

export default App;
