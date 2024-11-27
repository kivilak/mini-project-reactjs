import React, { useId } from 'react'

function InputBox({ label, type, placeholder, svg }) {
    const id = useId();

    return (
        <div className="flex flex-col w-3/5 my-10">
            <label htmlFor={id} className="font-bold text-xl text-baker-yellow">{label}</label>
            <div className="mt-5 border-b-2 border-baker-yellow flex flex-row">
                {svg}
                <input id={id} type={type} className="ml-2 mb-2 w-full bg-body-color outline-none" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default InputBox