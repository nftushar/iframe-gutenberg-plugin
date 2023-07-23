// Your main code
import "./style.scss";
import { minimizeIcon, maximizeIcon } from "./utils/icons";
 
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    const ifmEls = document.querySelectorAll(".wp-block-ifm-iframe");
    ifmEls.forEach((ifmEl) => {

        const fullScreenBtn = ifmEl.querySelector('.fullScreenBtn');

        const onFullScreen = () => {

            if (document.fullscreenElement) {
                document.exitFullscreen();
                ReactDOM.render(maximizeIcon, fullScreenBtn);
            } else {
                ifmEl.requestFullscreen();
                ReactDOM.render(minimizeIcon, fullScreenBtn);
            }
        };
        fullScreenBtn.addEventListener('click', onFullScreen);

        ifmEl?.removeAttribute("data-attributes");
    });
});
