import React from 'react';
import Header from 'components/header/Header';
import HashContainer from 'containers/hash/HashContainer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HashContainer />
      </div>
    );
  }
}

export default App;
