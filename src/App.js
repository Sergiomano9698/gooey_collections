// import logo from './logo.svg';
import './App.css';
import Button from './lib/components/Button'
import Loader from './lib/components/Loader/Loader'
import Horizontal_loader from './lib/components/horizontal_loader/horizontal_loader';

import Collapse_loader from './lib/components/collapse_loader/collapse_loader'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        <Button label="Submit" kind="primary" bg_clr="grey" name="Mano"/>

        {/* <Loader/>
        <Horizontal_loader/> */}
        <Collapse_loader/>
      </header>
    </div>
  );
}

export default App;
