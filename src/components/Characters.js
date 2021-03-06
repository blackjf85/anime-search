import React from 'react'

function Characters ({ character }) {
    const { image_url, name, role } = character
    return (
        <div>
            <div>
                <img src ={image_url} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>Role: {role}</p>
            </div>
        </div>
    )
}

export default Characters