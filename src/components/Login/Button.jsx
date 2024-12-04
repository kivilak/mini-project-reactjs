import React from 'react'

function Button({ name }) {
    return (
        <>
            <button type="submit" className="text-white font-semibold hover:bg-blend-darken bg-black/10 bg-gradient-to-r from-baker-yellow to-baker-orange w-60 p-2 rounded-lg">{name}</button>
        </>
    )
}

export default Button