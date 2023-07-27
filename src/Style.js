import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { width, height, border, shadow } = attributes;

    return <style dangerouslySetInnerHTML={{
        __html: `
        #ifmIframe-${clientId} .ifmIframe{
            width: ${width};
            height: ${height};
            ${getBorderCSS(border)}; 
            box-shadow: ${getMultiShadowCSS(shadow)}
        }
    `}}
    />
}
export default Style;