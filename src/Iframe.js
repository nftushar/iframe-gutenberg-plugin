import { useState } from 'react';
import { maximizeIcon, minimizeIcon } from './utils/icons';

const Iframe = ({ attributes, clientId }) => {
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
        <iframe
            title={title}
            width='100%'
            height='100%'
            src={src}
            loading={loading}
            allowfullscreen={isFullScreen}
        ></iframe>

        {(isFullScreen && !src.includes('youtube.com/embed')) && (
            <button onClick={onFullScreen} className="fullScreenBtn" dangerouslySetInnerHTML={{ __html: isNowFull ? minimizeIcon : maximizeIcon }} />
        )}
    </div>
}
export default Iframe;