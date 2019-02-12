import React, { Component } from 'react';

class Signup extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            bio: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();

        // making graphql query
        // use ${} to add value
        const graphqlQuery = {
            query: `
                mutation {
                    createAccount(accountData: {username: "${this.state.username}", password: "${this.state.password}", bio: "${this.state.bio}"}) {
                    _id
                    username
                    }
                }
            `
        };

        // browser send an option request before it send other request
        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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

        console.log();
    }
    
    render(){
        return(
            <div className="register">
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                    />
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <input
                        placeholder="Bio"
                        name="bio"
                        type="text"
                        value={this.state.bio}
                        onChange={this.onChange}
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Signup;