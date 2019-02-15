import React, {Component} from 'react'




export default class Product extends Component {
    constructor() {
        super();


        return (
          <div>
             <nav>
            <input type="text" name="Something1"/>
            <button onClick>Add to Inventory</button>

            <input type="text2" name="Something2"/>
            <button onClick>Cancel</button>

            <input type="text3" name="Something3"/>

            </nav>
          </div>
        )
    }
}