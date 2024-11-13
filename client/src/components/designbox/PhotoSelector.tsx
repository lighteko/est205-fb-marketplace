import { useState } from 'react';
import { Colors } from '../../constants/styles';
import Icon from '../common/Icon';
import camera from "../../assets/icons/camera.svg";

export default function PhotoSelector() {
    const [pictureCount, setPictureCount] = useState(0);

    const handlePhotoClick = () => {
        if (pictureCount < 10) {
            setPictureCount(prevCount => prevCount + 1);
        }
    };

    return (
        <button style={{ 
            color: Colors.primaryColor, 
            borderColor: Colors.primaryColor, 
            borderRadius: '5px',
            background: 'none',
         }} className="OuterBox" onClick={handlePhotoClick}>
            <Icon src={camera} alt="camera" autoSize/>
            <span className="button-text">{pictureCount}/10</span>
        </button>
    );
}
