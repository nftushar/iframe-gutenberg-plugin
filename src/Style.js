import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { width, height, border, shadow } = attributes;

    return <style dangerouslySetInnerHTML={{
        __html: `
        #bBlocksIframe-${clientId} .bBlocksIframe{
            width: ${width};
            height: ${height};
            ${getBorderCSS(border)}; 
            box-shadow: ${getMultiShadowCSS(shadow)}
        }
    `}}
    />
}
export default Style;