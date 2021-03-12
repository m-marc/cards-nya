import React from 'react';

type loaderPropsType = {
    position?: "center" | "initial";
    width?: string,
    height?: string,
}

export const Loader = ({width = "100px", height = "100px", position = "initial"}:loaderPropsType) => {
    return (
        <div className={`spinnerWrapper ${(position === "center") ? "spinnerWrapper--center" : ""}`}
             style={{width: width, height: height}}>
            <div className={"spinnerInner"}>
                <div className={"spinner"}>&nbsp;</div>
            </div>
        </div>
    );
};