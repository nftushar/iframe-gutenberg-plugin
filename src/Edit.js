import { useEffect } from "react";

import Settings from "./Settings";
import Map from "./Map";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
  const{src} = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksMap-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}

      <Style attributes={attributes} clientId={clientId} />
      {src ? <Map attributes={attributes} clientId={clientId} /> : <div className="notice">
        Please insert a source to show map-block.
        </div>}
    </div>
  </>
};
export default Edit;
