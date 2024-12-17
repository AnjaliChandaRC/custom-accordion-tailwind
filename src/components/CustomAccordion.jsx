import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'

const CustomAccordion = () => {
    const [value, setValue] = useState()

    const handleClick = (index) => (
        setValue(value === index ? "" : index)
    )
    return (
        <div className="py-20 max-w-[1140px] mx-auto text-center">
            {FAQ_LIST.map((obj, index) => (
                <div key={index} className="mb-4">
                    {/* Question */}
                    <div onClick={() => handleClick(index)}
                        className="flex justify-between items-center max-w-[500px] cursor-pointer p-4 bg-gray-100 rounded-lg shadow-md"
                    >
                        <h2 className="text-lg font-bold text-[#191A42]">{obj.question}</h2>
                        <span className="text-lg font-bold text-[#191A42]">
                            {value === index ? "-" : "+"}
                        </span>
                    </div>
                    {/* Answer */}
                    <div className={`${value === index ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0"} overflow-auto sm:overflow-hidden transition-all duration-1000 ease-in-out`}
                    >
                        <p className="text-lg text-[#191A42] mt-2 max-w-[500px] p-4 bg-white rounded-lg shadow-sm">
                            {obj.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CustomAccordion