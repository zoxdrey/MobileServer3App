import React from 'react';
import SideMenu from './components/sideMenu';
import { CardsFeed } from './components/cardsFeed';
import './App.css';
import { render } from '@testing-library/react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      cardsCount: [1,2,3,4,5]};
  }

  addCard(){
    const addEl = this.state.cardsCount.push(this.state.cardsCount.length + 1);
    this.setState({cardsCount: this.state.cardsCount});
    console.log(this.state.cardsCount);
    console.log(this.state.cardsCount);
  }
  

  render() {
    return (
      <div className="App">
        <div className='row'>
        <div className='col-2'>
            <SideMenu></SideMenu>
        </div>
          <div className='col'>
          <CardsFeed cardsCount={this.state.cardsCount}></CardsFeed>
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-circle btn-xl" onClick={() => this.addCard()}>
          <i className="glyphicon glyphicon-ok">+</i>
        </button>
      </div>
    );
  }
 
}
