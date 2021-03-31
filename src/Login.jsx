import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            islogin: false,
            name:"ravi"
        }
    }


    logout = () => {

        this.setState({
            islogin: false
        })
    }


    login = () => {

        this.setState({
            islogin: true
        })
    }


    handlechange=(event)=>{
        this.setState({
            name:event.target.value
        })
        console.log(this)
        console.log(event)
    }
    render() {

        return (
            this.state.islogin ?
                <div>
                    Hello{this.state.name}
                    <button onClick={this.logout}>Logout</button>
                </div> :
                <div>
                    User name:<input type="text" value={this.state.name} onChange={this.handlechange} ></input>
            password:<input type="password" value="enter password"></input>
                    <button onClick={this.login}>Login</button>

                </div>




        )
    }
}

export default Login