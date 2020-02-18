import React from 'react';

export const handleApiError = (response) => {
    if (!response.ok) {
        console.log('ERROR')
        throw Error(response.statusText);
    }
    return response
}

export const handleTabs = (arr, song, artist, tab) => {
    let tabsLink = 'http://www.songsterr.com/a/wa/bestMatchForQueryString?';
    return arr.map((tabType, index) => 
    <div className={tab === tabType ? "tab purple" : "tab"} key={index}><a target="_blank" rel="noopener noreferrer" href={tabsLink + `s=${song.replace(' ', '+')}&a=
    ${artist.replace(' ', '+')}&inst=${tabType}`}>  
    {'  ' + tabType.replace('TEXT_', '').replace('_TAB', '') + '  '}  
    </a></div>
    )
}