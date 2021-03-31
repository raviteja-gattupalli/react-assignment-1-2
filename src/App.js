import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './project/Header'
import Button from './Button'

import Login from './Login'
class App extends React.Component {

  render() {

    return (

      <div>
        <Button />
        <h1>Header</h1>
        <Footer />
        <Login />
      </div>


    )


  }
}



export default App;
