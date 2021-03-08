import React from 'react';

export const Loader = () => {
    return (
        <div className={"spinnerWrapper"}>
            <div className={"spinnerInner"}>
                <div className={"spinner"}>&nbsp;</div>
            </div>
        </div>
    );
};