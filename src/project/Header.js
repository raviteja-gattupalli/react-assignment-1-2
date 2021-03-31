import React from 'react'
import ReactDom from 'react-dom'
import './header.css'

class Footer extends React.Component {



    constructor() {
        super();
        var today = new Date;
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.state = { ctime: time };


    }

    componentDidMount() {


        setInterval(() => {
            console.log("componenet")
            var today = new Date;
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            this.setState({ ctime: time })

        }, 3000)
    }
    shouldComponentUpdate() {
        console.log("update before")
        return true


    }
    componentDidUpdate() {

        console.log("update")

    }

    render() {






        return <footer class="foot">{this.state.ctime}</footer>;
    }
}

export default Footer;