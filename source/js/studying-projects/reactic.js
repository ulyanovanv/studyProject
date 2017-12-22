/**
 * Created by Anastasiia on 12/22/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
    return <div>Hello World</div>;
}
}

ReactDOM.render(<MyComponent />, document.getElementById("app"));