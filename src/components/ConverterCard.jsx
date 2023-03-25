import React, { useState } from 'react'

const ConverterCard = () => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState(0)
    const [temp, setTemp] = useState('')
    const [temp2, setTemp2] = useState('')

    const Cel2Fah = (input + 9/5) + 32 + "°F"
    const Fah2Cel = ((input-32) * 5/9) + "°C"
    const Kel2Cel = (input - 273.15) + "°C"
    const Cel2Kel = (input + 273.15) + "K"
    const Kel2Fah = ((input - 273.15) * 9/5 + 32) + "°F"
    const Fah2Kel = ((input - 32) * 5/9 + 273.15) + "K"

    const handleClick = (e) => {
        e.preventDefault();
        setResult(`${temp === 'celsius' && temp2 === "fahrenheit"? Cel2Fah:temp === "fahrenheit" && temp2 === "celsius"? Fah2Cel : temp === "kelvin" && temp2 === "celsius"? Kel2Cel : temp === "celsius" && temp2 === "kelvin"? Cel2Kel : temp === "kelvin" && temp2 === "fahrenheit"? Kel2Fah : temp === "fahrenheit" && temp2 === "kelvin"? Fah2Kel : ''}`)
    }

  return (
    <div className='lg:w-[80vw] w-[90vw] lg:h-[70vh] h-[160vh] m-[auto] rounded-2xl bg-[#f3f6fa] lg:flex lg:place-items-center lg:p-0 p-[2rem]'>
        <div className='lg:w-[70%] w-[20rem] lg:h-[30rem] h-[35rem] bg-white m-[auto] rounded-lg shadow-xl p-[3rem]'>
            <span className='lg:flex justify-between'>
                <div>
                    <p className='textColor'>Degrees</p>
                    <input type="Number" placeholder='Enter Degree...' className='border placeholder:italic border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' onChange={(e) => setInput(e.target.value)} required />
                </div>
                <div  className='lg:my-0 my-[1.5rem]'>
                    <section>
                        <p className='textColor'>Convert From</p>
                        <select className='border border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' onChange={(e) => setTemp(e.target.value)}>
                            <option className='italic' value="">convert from...</option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </section>
                    <section>
                        <p className='textColor'>Convert To</p>
                        <select className='border border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' onChange={(e) => setTemp2(e.target.value)}>
                            <option value="" className='italic'>convert to...</option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </section>
                </div>
                <button className='w-[13rem] bg-[#5596f6] text-white font-[500] mt-[1.9rem] h-[3rem] text-2xl'  onClick={handleClick}>Convert</button>
            </span>
            <div className='mt-[3.5rem]'>
                <p className='textColor'>Result</p>
                <h1 className='result'>{result}</h1>
            </div>
        </div>
    </div>
  )
}

export default ConverterCard