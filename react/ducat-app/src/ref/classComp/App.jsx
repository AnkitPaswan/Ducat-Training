import React, { Component, createRef } from 'react'

export default class App extends Component {

    constructor() {

        super();

        // this.paragraphRef = React.createRef()
        this.paragraphRef = createRef()
    };

    getDetails = () => {
        this.paragraphRef.current.classList.toggle("container");
    }

    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nihil.</p>
                <button onClick={this.getDetails}>Click ME</button>
            </div>
        )
    }
}
