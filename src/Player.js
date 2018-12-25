import React from 'react';
import './Player.css';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = { wins: 0 }

        this.incrementWins = this.incrementWins.bind(this);
        this.decrementWins = this.decrementWins.bind(this);
    }

    incrementWins() {
        const { wins } = this.state;
        this.setState({ wins: wins + 1 });
    }

    decrementWins() {
        const { wins } = this.state;
        if (wins > 0) {
            this.setState({ wins: wins - 1 });
        }
    }

    render() {
        const { name } = this.props;
        const { wins } = this.state;
        const show = `${name}: ${wins} wins `;

        return (
            <div>
                {show}
                <button className="button" onClick={this.incrementWins}>
                    +
                </button>
                <button className="button" onClick={this.decrementWins}>
                    -
                </button>
            </div>
        )
    }

}

export default Player;
