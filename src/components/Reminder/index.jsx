import React from "react";

export default class Reminder extends React.Component {
 
  render() {
    return (
      <>
        <h3>Seleccion Anterior: {this.props.lastChoice.toUpperCase()}</h3>
        <h4>Historial de opciones elegidas</h4>
        <ul>
            {this.props.previousChoices.map((word,index)=><li key={`${index}${word}`}>{word.toUpperCase()}</li>)}
        </ul>
      </>
    );
  }
}