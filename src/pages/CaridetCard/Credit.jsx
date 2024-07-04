import React from 'react'
import './credit.css'
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useState } from "react";



const Credit = () => {
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
        Price:"$"
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleInputFocus = (e) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
      };
    
  return (
    <div className="container-cridet">
      <div className="card-containers">
        <div className="form-containers">
        <Cards 
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
          Price ={state.price}
        />
          <form style={{marginTop:"30px"}}> 
            <div className="mb-3">
              <input
                type="number"
                name="number"
                className="form-control"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="row">
              <div className="col-6 mb-3">
                <input
                  type="number"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="number"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <input 
                  type="number"
                  name="Price"
                  className="form-control"
                  placeholder="Price"
                  pattern="\d{3,6}"
                  value={state.Price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="d-grid">
              <button className="btn btn" style={{background:"#543cdc", color:"#f7f7f7"}}>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Credit