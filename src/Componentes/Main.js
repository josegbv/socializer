import React from 'react';

export default function Main({children, center}){
    let classes = ` ${center ? 'Main--center': 'Main'}`;

    return <main className={classes}>{children}</main>
}