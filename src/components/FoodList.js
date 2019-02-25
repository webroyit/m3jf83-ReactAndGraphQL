import React, { Component } from 'react';

class AddFood extends Component{
    constructor(){
        super();
        this.state = {
            token: localStorage.getItem('token')
        };
    }

    showFoods(){
        // calling for graphql query to get all foods data and you can specify which data to get
        const graphqlQuery = {
            query: `
                query{
                    foods{
                        foods{
                            _id
                            name
                            price
                            date
                            origin{
                                username
                            }
                        }
                    }
                }
            `
        };

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
                console.log(resData.data.foods.foods);
            })
            .catch(err => {
                console.log(err);
            })
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