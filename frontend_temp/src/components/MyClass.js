import React, {Component} from "react";


class MyClass extends Component{

    Clicked() {
        alert('Class Component')
    }

    render() {
        return(
            <div>
                <h1 className="bg-primary text-white text-center">My email : {this.props.email}</h1>
                <button className="btn btn-success" onClick = {this.props.myclick}>Click</button>
            </div>
        ) 
    }
}

export default MyClass; 