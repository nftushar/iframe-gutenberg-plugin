import { useEffect, useState } from "react";
import Settings from "./Settings";
import { maximizeIcon, minimizeIcon } from "./utils/icons";
import { getBorderCSS } from '../../Components/utils/getCSS';


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;

  const { src, width, height, border, loading, isFullScreen } = attributes;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  const [isNowFull, setIsNowFull] = useState(false);

  const onFullScreen = () => {
    const element = document.querySelector(`#ifm-${clientId}`);

    if (document.fullscreenElement) {
      setIsNowFull(false);
      document.exitFullscreen();
    } else {
      setIsNowFull(true);
      element.requestFullscreen();
    }
  };


  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />
    <div>
      {/* border: 10px solid #ccc !important; */}
      <style>{`
          #ifm-${clientId} .ifmIframe{
             ${getBorderCSS(border)};
            color: coral;
            box-shadow:   inset 0 -3em 3em rgba(0, 0, 0, 0.1),
            0 0 0 2px rgb(255, 255, 255),
            0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
          }
        `}</style>

      <div className={`${className}`} id={`ifm-${clientId}`}>
        {!isSelected && <div className="mouse"></div>}
        <iframe
          className="ifmIframe"
          id="video-frame"
          title="title"
          width={width}
          height={height}
          // style="border:5px solid black;"
          src={src}
          loading={loading}
          allowfullscreen={isFullScreen}
        ></iframe>

        {(isFullScreen && !src.includes('youtube.com/embed')) && (
          <button onClick={onFullScreen} className="fullScreenBtn" dangerouslySetInnerHTML={{ __html: isNowFull ? minimizeIcon : maximizeIcon }} />
        )}
      </div>
    </div>
  </>
};
export default Edit;
