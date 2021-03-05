import React from 'react';
import s from "./Error404.module.css"

export const Error404 = () => {
    return <div className={s.wrapper}>
        <h1 className={s.title}>404</h1>
        <h3 className={s.subtitle}>Page not found!</h3>
        <p>This may not mean anything.<br/>I'm probably working on something that has blown up.</p>
        <p>Anyway, Hello World!</p>
    </div>
}