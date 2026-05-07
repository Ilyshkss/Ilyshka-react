import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';
import ListOfPosts from './components/ListOfPosts/ListOfPosts';
import User from './components/User/User';
import Header from './components/Header/Header';

function App() {
  return (
  <div>
  <Header></Header>
  {/* <Title textContent="Blog"></Title> */}
  <Tabs></Tabs>
  <ListOfPosts></ListOfPosts>
  </div>
  );
}

export default App;
