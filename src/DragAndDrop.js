import React, { Component } from "react";
import './DragAndDrop.css';

class DragAndDrop extends Component {
  dragCounter = 0;

  state = {
    dragging: false,
  }

  handleDragOver = (e) => {
    e.preventDefault();
  };

  handleDragEnter = (e) => {
    e.preventDefault();

    // This trick prevents from dragging state to be called multiple times and flickering when drag in event as result. This happens because the event gets fired not only on the parent (main) div, but also on it's children.
    this.dragCounter++;

    this.setState({dragging: true})
  };

  handleDragLeave = (e) => {
    this.dragCounter--;

    if (this.dragCounter > 0) return;
    
    this.setState({dragging: false})
  };

  handleDrop = (e) => {
    e.preventDefault();

    this.setState({dragging: false})

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDropedFile(e.dataTransfer.files);
      this.dragCounter = 0;
    }
  };

  render() {
    return (
      <div 
        className="drop-container"
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.state.dragging && 
          <div className="drop-container__drop-area">
            <div className="drop-container__text">drop here</div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}

export default DragAndDrop;
