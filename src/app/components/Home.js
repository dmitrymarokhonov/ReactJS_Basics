import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });

    }
    render() {
        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, Your age is {this.state.age}</p>
                <p>Status:  {this.state.status}</p>
                <hr />
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
                {/* <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button> */}
            </div>
        );
    }
}

// Home.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number
// };