import React from "react";

export default class Choice extends React.Component {
  handlerClick = () => {
    this.props.choice === "FIN."
      ? alert("FIN")
      : this.props.updateLayout(this.props.button);
  };
  render() {
    return (
      <div className="opcion" key={this.props.choice}>
        <button className="botones" onClick={this.handlerClick}>
          {this.props.button.toUpperCase()}
        </button>
        <h2>{this.props.choice}</h2>
      </div>
    );
  }
}