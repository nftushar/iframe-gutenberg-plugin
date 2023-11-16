import { useState } from 'react';
// import { solidIcon, outlineIcon } from './utils/icons';

const Map = ({ attributes, clientId }) => {
    const { src, title, loading } = attributes;

    const [isNowFull, setIsNowFull] = useState(false);

 

    return <div className='bBlocksMap'>
        <map
            title={title}
            width='100%'
            height='100%'
            src={src}
            loading={loading}
        /> 
 
    </div>
}
export default Map;