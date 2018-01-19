import React from "react";
const styles = {
    fontSize: "2rem"
}

export class Child extends React.Component {
    render(){
        return <div onClick={this.props.onClick} style={styles}> Hello {this.props.name}</div>;
    }
}