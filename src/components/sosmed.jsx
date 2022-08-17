import React from 'react';
import Media from './media';

function Socialmedia() {
    return ( 
        <div className='sosmed'>
            <Media
            media="fa-brands fa-github"
            link="https://github.com/jovanaan231"
            />
            <Media
            media="fa-brands fa-spotify"
            link="https://open.spotify.com/user/m23do8o9z9mow147tsrbm519h?si=00cb1e0f7b9c49c9"
            />
            <Media
            media="fa-brands fa-steam"
            link="https://steamcommunity.com/id/jovanaan12/"
            />
            <Media
            media="fa-brands fa-youtube"
            link="https://www.youtube.com/channel/UCMe-vj7wCapOLWMp2DBkp9Q"
            />
        </div>
     );
}

export default Socialmedia;