import './App.css';
import React from 'react';
import Card from './Components/Card';
import foodData from './mock/foodData';
import Header from './Components/Header';
import CartModel from './Components/CartModel';


function App() {

  const getCards = () => {
    return foodData.map((data) => {
      return <Card foodData={data}/>
    })
  }
  
  return (
    <React.Fragment>
    <Header />
    <div className='container d-flex'>
      {getCards()}
    </div>
    <CartModel foodData={getCards()}/>
    </React.Fragment>
  )
}

export default App;