import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CentereButton from './components/CentereButton';
import "./App.scss";

import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
    
  <CreditCard />
  <CardList post={posts}/>
  <CentereButton> Abra sua conta <CentereButton />

</div>

);
export default App;
