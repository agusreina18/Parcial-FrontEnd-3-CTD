import React from "react";
import Choice from "../Choice";
import Reminder from "../Reminder";

export default class Layout extends React.Component {
  updateLayout = (newValue) => {
    this.props.update(newValue);
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.props.obj.historia}</h1>
        <div className="opciones">
          <Choice
            button="a"
            choice={this.props.obj.opciones.a}
            updateLayout={this.updateLayout}
          />
          <Choice
            button="b"
            choice={this.props.obj.opciones.b}
            updateLayout={this.updateLayout}
          />
        </div>
        <div className="recordatorio">
            <Reminder previousChoices={this.props.previousChoices} lastChoice={this.props.lastChoice}/>
        </div>
      </div>
    );
  }
}