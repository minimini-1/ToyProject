import React, {Component} from 'react'

class Name extends Component {

    constructor(){
        super()
        this.state = {
            name:"Hiseoung"
        }
    }

    clickedMe = () => {
        this.setState({
            // name:'Change Text'
            name:this.state.name === 'Hiseoung' ? 'ahn' : 'Hiseoung'
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick = {this.clickedMe} className="btn btn-success">Change Text</button>
            </div>
        )
    }
}

export default Name;