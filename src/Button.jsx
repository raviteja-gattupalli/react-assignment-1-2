import React from 'react'


class Button extends React.Component {


    constructor() {
        super()
        this.state = {
            name: "ravi"
        }
    }

    changetext = (e) => {

        this.setState({
            name: e
        })
    }

    render() {

        return (<div>
            <p>{this.state.name}</p>

            <button onClick={this.changetext.bind(this,"raviteja")}>ClickHere</button>

        </div>)


    }

}

export default Button