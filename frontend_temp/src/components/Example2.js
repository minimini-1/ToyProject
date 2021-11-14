import React, { Component } from 'react'

export class Example2 extends Component {
    
    myElement = (names) => (
        names.map(name =>
               <div key={name}>
               {`${name}`}
               </div>
           )
    )
    
    render() {
        return (
            <div>
                <h3>
                    {this.myElement(this.props.names)}
                </h3>
            </div>
        )
    }
}

export default Example2
