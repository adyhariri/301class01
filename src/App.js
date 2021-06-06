import React from 'react';
import Main from './components/main';


class App extends React.Component {
  render(){
    return (
      <div>
        <header>
          <h1>HornedBeast</h1>
        </header>
          <Main />
        <footer> 
          authorized by mahmoud alhariri
        </footer>
      </div>
    )
  }
}
export default App;