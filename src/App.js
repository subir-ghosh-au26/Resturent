import './App.css';
import React from 'react';
import Card from './Components/Card';
import foodData from './mock/foodData';
import Header from './Components/Header';


function App() {

  const getCards = () => {
    return foodData.map((data) => {
      return <Card foodData={data} />
    })
  }

  console.log(getCards())
  return (
    <React.Fragment>
    <Header />
    <div className='container d-flex'>
      {getCards()}
    </div>
    </React.Fragment>
  )
}

export default App;