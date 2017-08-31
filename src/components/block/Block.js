import React from 'react';

class Block extends React.Component {
  render() {
    return (
      <div className="card-panel blue lighten-5">
        {this.props.children}
      </div>
    );
  }
}

export default Block;
