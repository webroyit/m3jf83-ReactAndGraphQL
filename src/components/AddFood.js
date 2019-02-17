import React, { Component } from 'react';

class AddFood extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault(); 

        const data = {
            name: this.state.name,
            price: this.state.price
        };

        console.log(data);
    }
    
    render(){
        return(
            <div className="addFood">
                <h1>Add Food</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Name of Food"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input
                        placeholder="Price"
                        name="price"
                        type="number"
                        value={this.state.price}
                        onChange={this.onChange}
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddFood;