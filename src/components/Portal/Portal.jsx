import React from "react";
import ReactDOM from "react-dom";


class Portal extends React.Component {
  componentWillUnmount() {
    document.body.removeChild(this.defaultNode);
  }
  render()
  {
    if(!this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }
    return ReactDOM.createPortal(this.props.children,this.defaultNode)
  }
}
export default Portal;
