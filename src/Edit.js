import { useEffect, useState } from "react";
import Settings from "./Settings";
import Style from "./Style";
import { maximizeIcon, minimizeIcon } from "./utils/icons";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;
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
        <Style attributes={attributes} clientId={clientId} />

        <div className="ifmIframemain">
          <iframe
            className="ifmIframe"
            id="video-frame"
            width={width}
            height={height}
            src={src}
            title="Iframe 7"
            allowfullscreen={isFullScreen}
          ></iframe>

          {isFullScreen && (
            <button onClick={onFullScreen} className="fullScreenBtn">
              {isNowFull ? minimizeIcon : maximizeIcon}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Edit;
