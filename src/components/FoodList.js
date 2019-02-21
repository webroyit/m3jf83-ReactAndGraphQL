import React, { Component } from 'react';

class AddFood extends Component{
    showFoods(){
        console.log("it works");
    }
    
    render(){
        return(
            <div className="foods">
                <h1>Food List</h1>
                <button onClick={this.showFoods.bind(this)}>Show Foods</button>
            </div>
        );
    }
}

export default AddFood;