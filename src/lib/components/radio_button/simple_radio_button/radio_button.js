import React from 'react';
import './radio_button.css'
function radio_button(props){
    // const list_data = [
    //     {"id":"1", "name":"C"},
    //     {"id":"2", "name":"React js"},
    //     {"id":"3", "name":"Node js"},
    //     {"id":"4", "name":"Unreal engine"},
    // ];

    // {list_data.map(datas => (
    //     console.log(datas) 
    // ))}    
    return (
        <div className="App">
            <div class="container">
  
                <h2>Your favorite thing in the world:</h2>
                
                <ul>
                    {props.data.map((datas, key) => {
                    return <li>
                            <input type="radio" id={datas.id} name="selector" />
                            <label for={datas.id}>{datas.name}</label>
                            
                            <div class="check"></div>
                        </li>
                    })}
                    
                </ul>
                </div>
                
        </div>
    );   
 }

 export default radio_button;