// Your main code
import "./style.scss";
import { minimizeIcon, maximizeIcon } from "./utils/icons";

// import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    const ifmEls = document.querySelectorAll(".wp-block-ifm-iframe");
    ifmEls.forEach((ifmEl) => {

        const fullScreenBtn = ifmEl.querySelector('.fullScreenBtn');

        const onFullScreen = () => {

            if (document.fullscreenElement) {
                document.exitFullscreen();
                fullScreenBtn.innerHTML = maximizeIcon;
            } else {
                ifmEl.requestFullscreen();
                fullScreenBtn.innerHTML = minimizeIcon;
            }
        };
        fullScreenBtn.addEventListener('click', onFullScreen);

        ifmEl?.removeAttribute("data-attributes");
    });
});
