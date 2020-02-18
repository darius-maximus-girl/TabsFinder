import React from 'react';
import { HeartSpinner } from "react-spinners-kit";
import CloseBtn from '../assets/images/icons8-multiply-50.png';

const ValidPopup = ({ hidePopup }) => {
    return (
        <div className="popup-container" onClick={() => hidePopup(false)}>
            <div className="popup">
                <img src={CloseBtn} alt="close button"></img>
                <p className="message">Please, complete the input field :-)</p>
                <HeartSpinner size={40} color="#cfc8ee" loading={true} />
            </div>
        </div>
    )
}

export default ValidPopup;