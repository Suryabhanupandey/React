import React from 'react'

function Button(props) {
    return (
        <>
            <button className='px-5 py-2 border-0 bg-green-300  ' >{props.value}</button>
        </>
    )
}

export default Button
