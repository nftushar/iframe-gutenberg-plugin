import { useState } from 'react';
import { Outline, Solid } from './utils/icons';

const Rating = ({ attributes, clientId }) => {
    const { src, title, } = attributes; 

    const [isNowFull, setIsNowFull] = useState(false);

    const onFullScreen = () => {
        const element = document.querySelector(`#bBlocksIframe-${clientId}`);

        if (document.fullscreenElement) {
            setIsNowFull(false);
            document.exitFullscreen();
        } else {
            setIsNowFull(true);
            element.requestFullscreen();
        }
    };
 
}
export default Rating;