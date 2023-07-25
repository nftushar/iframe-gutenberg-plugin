import { useEffect, useState } from "react";
import Settings from "./Settings";

import { maximizeIcon, minimizeIcon } from "./utils/icons";

const Edit = (props) => {
  // console.log(props);
  const { className, attributes, setAttributes, clientId, isSelected
  } = props;
  const { src, width, height, isFullScreen } = attributes;

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

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div className={`${className}`} id={`ifm-${clientId}`}>
        {!isSelected && <div className="mouse"></div>}
        <iframe
          className="ifmIframe"
          id="video-frame"
          width={width}
          height={height}
          src={src}
          allowfullscreen={isFullScreen}
        ></iframe>

        {(isFullScreen && !src.includes('youtube.com/embed')) && (
          <button onClick={onFullScreen} className="fullScreenBtn" dangerouslySetInnerHTML={{ __html: isNowFull ? minimizeIcon : maximizeIcon }} />
        )}
      </div>
    </>
  );
};
export default Edit;
