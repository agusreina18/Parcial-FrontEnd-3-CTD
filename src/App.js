import React from 'react';
import Layout from './components/Layout/index.jsx';
import data from './data.json'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      counter: 1,
      lastChoice: "",
      previousChoices:[],
      choicesAvailable:[]
    }
    this.updateChoice=this.updateChoice.bind(this)
  }
  
  componentDidMount(){
    this.setState({choicesAvailable: data})
  }

  updateChoice(newValue){
    this.setState({ lastChoice: newValue, previousChoices:[...this.state.previousChoices,newValue], counter: this.state.counter+1 })
  }

  filter(){
    const filter = `${this.state.counter}${this.state.lastChoice}`
    const arrayFiltered= data.filter((word)=>word.id===filter)
    return arrayFiltered[0];
  }

  

  render(){
    return (
      <div className="App">
        <Layout choice={`${this.state.counter}${this.state.lastChoice}`} obj={this.filter()} update={this.updateChoice} lastChoice={this.state.lastChoice} previousChoices={this.state.previousChoices}/>

      </div>
    );
  }
  
}