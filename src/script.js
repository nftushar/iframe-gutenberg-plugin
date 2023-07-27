import { render } from 'react-dom';

import "./style.scss";
import Style from "./Style";
import Iframe from './Iframe';


document.addEventListener("DOMContentLoaded", () => {
    const ifmEls = document.querySelectorAll(".wp-block-ifm-iframe");
    ifmEls.forEach((ifmEl) => {
        const attributes = JSON.parse(ifmEl.dataset.attributes);
        const { cId } = attributes;

        render(<>
            <Style attributes={attributes} clientId={cId} />
            <Iframe attributes={attributes} clientId={cId} />
        </>, ifmEl);

        ifmEl?.removeAttribute("data-attributes");
    });
});

