import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__wobble animate__delay-1s">
            <img src={ url } alt="" ></img>
            <p>{title}</p>
        </div>
    )
}
