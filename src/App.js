// import logo from './logo.svg';
import './App.css';

import Bubble_button from './lib/components/Buttons/bubble_effect/bubble_effect'
// import Loader from './lib/components/Loader/Loader'
// import Horizontal_loader from './lib/components/horizontal_loader/horizontal_loader';

// import Collapse_loader from './lib/components/collapse_loader/collapse_loader'

// import Radio_button from './lib/components/radio_button/simple_radio_button/radio_button'
// import Amount_slider from './lib/components/filter_slider/amount_slider/amount_slider'

function App() {
  const btn_click = () =>{
    console.log("test")
  }
  const amounts_data = [
    {"id":"1", "name":"$10k"},
    {"id":"2", "name":"$10k-25k"},
    {"id":"3", "name":"$25k-50k"},
    {"id":"4", "name":"$50k-100k"},
    {"id":"5", "name":"$100k+"}
];

const list_data = [
        {"id":"1", "name":"C"},
        {"id":"2", "name":"React js"},
        {"id":"3", "name":"Node js"},
        {"id":"4", "name":"Unreal engine"},
    ];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button label="Submit" kind="primary" bg_clr="grey" name="Mano"/> */}
        <Bubble_button label="Submit" name="submit" handleClick={btn_click} bg_color="#003d33" color="#fff" font="20px" border="2px solid #fff"/>

        {/* <Amount_slider data={amounts_data}/> */}
      {/* <Radio_button data={list_data}/> */}
        {/* <Loader/>
        <Horizontal_loader/> */}
        {/* <Collapse_loader/> */}
      </header>
    </div>
  );
}

export default App;
