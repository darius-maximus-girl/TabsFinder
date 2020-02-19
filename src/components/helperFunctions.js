import React from 'react';

export const handleApiError = (response) => {
    if (!response.ok) {
        console.log('ERROR')
        throw Error(response.statusText);
    }
    return response
}

export const handleTabs = (tabTypes, song, artist, tab) => {
    const tabsLink = `http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${song.replace(' ', '+')}&a=
    ${artist.replace(' ', '+')}`;
    return tabTypes.map((tabType, index) => {
        const formattedTabType = tabType.replace('TEXT_', '').replace('_TAB', '').toLowerCase();
        return (
            <div className={tab === tabType ? "tab highlight" : "tab"} key={index}>
                <a target="_blank" rel="noopener noreferrer" href={tabsLink + `&inst=${formattedTabType}`}>{'  ' + formattedTabType + '  '}</a>
            </div>)
    }
    )
}