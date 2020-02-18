import React, { useState } from 'react';
import SearchBtn from './searchBtn';

const SearchForm = () => {

    const [songOrArtist, setSongOrArtist] = useState('');
    const [tab, setTab] = useState('CHORDS');

    const resetSongOrArtist = () => {
        setSongOrArtist('');
    }

    return (
        <form className="form-container">
            <div className="form-container__item">
                <input className="user-input" value={songOrArtist} onChange={e => setSongOrArtist(e.target.value)} placeholder='Find tabs by a song or an artist'></input>                    
                <select className="user-select" onChange={e => setTab(e.target.value)}>
                    <option value="CHORDS">chords</option>
                    <option value="TEXT_BASS_TAB">bass</option>
                    <option value="TEXT_GUITAR_TAB">guitar</option>
                    <option value="PLAYER">player</option>
                </select>
            </div>
            <SearchBtn songOrArtist={songOrArtist} tab={tab} resetSongOrArtist={resetSongOrArtist}/>
        </form>
    )
}

export default SearchForm;