import React from 'react';
import '../style/SocialMedia.css'
import { SocialIcon } from 'react-social-icons';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <SocialIcon url="https://www.facebook.com" bgColor="#3b5998" style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://www.twitter.com" bgColor="#1DA1F2" style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://www.instagram.com" bgColor="#E1306C" style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://www.tiktok.com" bgColor="#010101" style={{ height: 30, width: 30 }} />
        </div>
    );
};

export default SocialMedia;