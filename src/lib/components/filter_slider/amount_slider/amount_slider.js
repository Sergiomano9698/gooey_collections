import React from 'react';
import './amount_slider.css'
function Amount_slider(props){
    // const amounts_data = [
    //     {"id":"1", "name":"$10k"},
    //     {"id":"2", "name":"$10k-25k"},
    //     {"id":"3", "name":"$25k-50k"},
    //     {"id":"4", "name":"$50k-100k"},
    //     {"id":"5", "name":"$100k+"}
    // ];

    const div_width = {
        width: "100%"
    }
    return (
        <div className="App">
           <div id="form-wrapper">
                <form action="" method="GET">
                    <h1 id="form-title">Select Debt Amount</h1>
                    <div id="debt-amount-slider">
                        {/* <input type="radio" name="debt-amount" id="1" value="1" required />
                        <label for="1" data-debt-amount="< $10k"></label>
                        <input type="radio" name="debt-amount" id="2" value="2" required />
                        <label for="2" data-debt-amount="$10k-25k"></label>
                        <input type="radio" name="debt-amount" id="3" value="3" required />
                        <label for="3" data-debt-amount="$25k-50k"></label>
                        <input type="radio" name="debt-amount" id="4" value="4" required />
                        <label for="4" data-debt-amount="$50k-100k"></label>
                        <input type="radio" name="debt-amount" id="5" value="5" required />
                        <label for="5" data-debt-amount="$100k+"></label> 
                            <div id="debt-amount-pos"></div>*/}

                        {props.data.map(data =>(
                            <div style={div_width}>
                                <input type="radio" name="debt-amount" id={data.id} value={data.id} required />
                                <label for={data.id} data-debt-amount={data.name}></label>
                                
                            </div>
                        ))}
                        <div id="debt-amount-pos"></div>
                    </div>
                </form>
            </div>
        </div>
    );   
 }

 export default Amount_slider;