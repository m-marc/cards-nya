import React from 'react';

type loaderPropsType = {
    position?: "center" | "initial";
}

export const Loader = ({position = "initial"}:loaderPropsType) => {
    return (
        <div className={`spinnerWrapper ${(position === "center") ? "spinnerWrapper--center" : ""}`}>
            <div className={"spinnerInner"}>
                <div className={"spinner"}>&nbsp;</div>
            </div>
        </div>
    );
};