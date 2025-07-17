import React from 'react'

export default function Title({title,sub}) {
    

    return (
        <>
            <div className='flex flex-col  items-center gap-5'>
            <div className="hero-badge">
                <p>{sub}</p>
            </div>
            <div className="semibold md:text-5xl text-3xl text-center">
                {title}
            </div>

            </div>
        </>
    )
}
