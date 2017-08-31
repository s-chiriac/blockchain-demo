import React from 'react';
import Block from 'components/block/Block';
import './HashContainer.css';

class HashContainer extends React.Component {
  render() {
    return (
      <div className="container hash-container row">
        <div className="col m2"></div>
        <div className="col s12 m8">
          <h2>Hash</h2>
          <Block>
            <div className="row">
              <div className="col s3 m3">
                Data
              </div>
              <textarea id="data" className="materialize-textarea hash-textarea col s9 m9" placeholder="Data" rows="8"></textarea>
            </div>
            <div className="row">
              <div className="col s3 m3">
                Hash
              </div>
              <div className="card-panel blue lighten-4 col s9 m9">
                <p>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
              </div>
            </div>
          </Block>
        </div>
        <div className="col m2"></div>
      </div>
    );
  }
}

export default HashContainer;
