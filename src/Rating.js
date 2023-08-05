import { useState } from 'react';
import { maximizeIcon, minimizeIcon } from './utils/icons';

const Rating = ({ attributes, clientId }) => {
    const { src, title, loading, isFullScreen } = attributes; 

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

    return <div className='bBlocksIframe'>
        <rating
            title={title}
            width='100%'
            height='100%'
            src={src}
            loading={loading} 
        ></rating>

        {(isFullScreen && !src.includes('youtube.com/embed')) && (
            <button onClick={onFullScreen} className="fullScreenBtn" dangerouslySetInnerHTML={{ __html: isNowFull ? minimizeIcon : maximizeIcon }} />
        )}
    </div>
}
export default Rating;