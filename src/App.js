import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

// componentWillMount() {
//   localStorage.getItem('contacts') && this.setState({
//     contacts: JSON.parse(localStorage.getItem('contacts')),
//     isLoading: false
//   })
// }

// componentDitMount(){
//   if(!localStorage.getItem('contacts')){
// this.fetchData();
//   } else {
// console.log('using data from localStorage.');
//   }
// }
// fetchData() {-
// }

// componentWillUpdate(nextProps, nextState) {
// localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
// localStorage.setItem('contactsDate', Date.now());
// } 

// render() {-
// }


export default App