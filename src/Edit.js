import { useEffect } from "react";

import Settings from "./Settings";
import Iframe from "./Iframe";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`ifmIframe-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}

      <Style attributes={attributes} clientId={clientId} />
      <Iframe attributes={attributes} clientId={clientId} />
    </div>
  </>
};
export default Edit;
