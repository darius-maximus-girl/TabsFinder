import React from "react";
import { HeartSpinner } from "react-spinners-kit";

const Spinner = ({val}) => {
    return (
        <HeartSpinner size={30} color="#d598e2" loading={val} />
    )
}

export default Spinner;