import React from 'react';
import { handleTabs } from './helperFunctions';
import Deezer from '../assets/images/icons8-deezer-64.png';

const ResultsList = ({ results, tab }) => {

    return (
        <ul className="results-container">
            {results.map((song, index) =>
                <li className="results-card" key={index}>
                    <div className="results-card__artist">{song.artist.name}</div>
                    <div className="results-card__title"><img src={Deezer} alt="deezer"></img><div className="song">{song.title}</div></div>
                    <div className="line"></div>
                    <div className="results-card__tabtypes">{handleTabs(song.tabTypes, song.title, song.artist.name, tab)}</div>
                </li>)}
        </ul>
    )
}

export default ResultsList;