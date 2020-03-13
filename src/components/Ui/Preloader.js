import React from "react";
import { ClipLoader } from "react-spinners";
// import "./PageLoader.css";

const Preloader = () => (
    <div className="sweet-loading">
        <div className="sweet-loading-body">
            {/*<div className="loader-text">Loading</div>*/}
            <ClipLoader
                className="loader"
                sizeUnit={"px"}
                size={60}
                color={"#ffdb00"}
                loading={true}
            />
        </div>

    </div>
);

export default Preloader;