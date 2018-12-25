import React from 'react';
import './Fighter.css';

function renderOverlay() {
    return (
        <div className="overlay">
            <span className="x">
                X
            </span>
        </div>
    );
}

class Fighter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { used: false }

        this.toggleStatus = this.toggleStatus.bind(this);
    }

    toggleStatus() {
        const { used } = this.state;
        this.setState({ used: !used });
    }

    render() {
        const { name } = this.props;
        const { used } = this.state;
        const overlay = used ? renderOverlay() : null;

        return (
            <div className="fighter" onClick={this.toggleStatus}>
                {overlay}
                {name}
            </div>
        )
    }
}

export default Fighter;
