import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
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
        const graphqlQuery = {
            query: `
                { 
                    login(username: "${this.state.username}", password: "${this.state.password}"){
                        token
                        accountId
                    }
                }
            `
        }

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
                // add the token to local storage
                localStorage.setItem('token', resData.data.login.token);
            })
            .catch(err => {
                console.log(err);
            })

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        console.log(data);
    }
    
    render(){
        return(
            <div className="login">
                <h1>Login</h1>
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
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Login;