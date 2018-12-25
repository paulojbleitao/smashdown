import React, { Component } from 'react';
import './App.css';
import Fighter from './Fighter';
import Player from './Player';

const fighters = ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Dark Samus',
                  'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Ness', 'Captain Falcon',
                  'Jigglypuff', 'Peach', 'Daisy', 'Bowser', 'Ice Climbers',
                  'Sheik', 'Zelda', 'Dr. Mario', 'Pichu', 'Falco', 'Marth',
                  'Lucina', 'Young Link', 'Ganondorf', 'Mewtwo', 'Roy',
                  'Chrom', 'Mr. Game & Watch', 'Meta Knight', 'Pit',
                  'Dark Pit', 'Zero Suit Samus', 'Wario', 'Snake', 'Ike',
                  'Pokémon Trainer', 'Diddy Kong', 'Lucas', 'Sonic',
                  'King Dedede', 'Olimar', 'Lucario', 'R.O.B', 'Toon Link',
                  'Wolf', 'Villager', 'Mega Man', 'Wii Fit Trainer',
                  'Rosalina & Luma', 'Little Mac', 'Greninja', 'Palutena',
                  'Pac-Man', 'Robin', 'Shulk', 'Bowser Jr.', 'Duck Hunt',
                  'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling',
                  'Ridley', 'Simon', 'Richter', 'King K. Rool', 'Isabelle',
                  'Incineroar'];

function createFighters() {
    return fighters.map((name) => <Fighter name={name} />);
}

class App extends Component {
    render() {
        return (
            <div>
                <div className="fighter-container">
                    {createFighters()}
                </div>
                <div className="player-container">
                    <Player name="Player 1" />
                    <Player name="Player 2" />
                </div>
            </div>
        );
    }
}

export default App;
