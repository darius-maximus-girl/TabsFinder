import React, { useState } from 'react';
import ResultsList from './resultsList';
import { handleApiError } from './helperFunctions';
import ValidPopup from './validPopup';
import Spinner from './spinner';

let api = 'https://www.songsterr.com/a/ra/songs.json?pattern=';
let message = 'Sorry, no results found. Try again!'

const SearchBtn = ({ songOrArtist, tab, resetSongOrArtist }) => {

    const [results, setResults] = useState([]);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [loader, setLoader] = useState(false);
    const [showPopup, setPopup] = useState(false);



    const handleNoResults = () => {
        setLoader(false);
        setNoResultsMessage(message);
        setResults([]);
    }

    const fetchResults = () => {
        setLoader(true);
        setResults([]);
        setNoResultsMessage('');

        return fetch(api + `${songOrArtist}`)
            .then(handleApiError)
            .then(response => response.json())
            .then(songs => {
                if (songs.length < 1) {
                    handleNoResults();
                    resetSongOrArtist();
                } else {
                    resetSongOrArtist();
                    let filteredSongs = songs.filter(song =>
                        song.tabTypes.includes(tab)
                    )
                    if (filteredSongs.length < 1) {
                        setNoResultsMessage(message);
                        setLoader(false);
                    } else {
                        setResults(filteredSongs);
                        setNoResultsMessage('');
                        setLoader(false);
                    }
                }
            })
            .catch(error => console.log(error));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        songOrArtist.length > 0 ? fetchResults() : setPopup(true);
        setNoResultsMessage('');
    }

    const hidePopup = (val) => {
        setPopup(val)
    }

    return (
        <div className="form-container__item form-container__item--transparent">
            <button className="search-btn" onClick={handleSubmit}>Search</button>
            <div className="no-results">{noResultsMessage}</div>
            <Spinner val={loader} />
            <ResultsList results={results} tab={tab} />
            {showPopup && <ValidPopup hidePopup={hidePopup} />}
        </div>
    )
}

export default SearchBtn;