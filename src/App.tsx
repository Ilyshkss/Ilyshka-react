import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';
import ListOfPosts from './components/ListOfPosts/ListOfPosts';

function App() {
  return (
  <div>
  {/* <Title textContent="Sign In"></Title>
  <Tabs></Tabs> */}
  <ListOfPosts></ListOfPosts>
  </div>
  );
}

export default App;
