import React, { Component } from 'react';

class AddFood extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            token: localStorage.getItem('token')
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();

        // call the login method in the resolver.js
        // if it an object, you must specify which field inside the object to get
        const graphqlQuery = {
            query: `
                mutation{
                    addFood(foodData:{name: "${this.state.name}", price: ${this.state.price}}){
                        _id
                        name
                        price
                        date
                        origin{
                            username
                        }
                    }
                }
            `
        }

        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token,
            },
            body: JSON.stringify(graphqlQuery)
        })
            .then(res => {
                return res.json();
            })
            .then(resData =>{
                if(resData.errors){
                    return console.log(resData.errors);
                }
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            })
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