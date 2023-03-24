import React, { useState } from 'react'

const ConverterCard = () => {

    const [input, setInput] = useState('')
    const [result, setResult] = useState(0)
    const [temp, setTemp] = useState('')

    // const handleInputChange = (e) => {
    //     setInput(e.target.value)
    // }

    const handleTemp = (e) => {
        setTemp(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setResult(`${temp === 'celsius'?((input + 9/5) + 32 + "°C"):((input-32) * 5/9 + "°F")}`)
    }
    console.log(temp)
    console.log(result)


  return (
    <div className='lg:w-[80vw] w-[90vw] lg:h-[50vh] h-[150vh] m-[auto] rounded-2xl bg-[#f3f6fa] lg:flex lg:place-items-center lg:p-0 p-[2rem]'>
        <div className='lg:w-[70%] w-[20rem] lg:h-[20rem] h-[30rem] bg-white m-[auto] rounded-lg shadow-xl p-[3rem]'>
            <span className='lg:flex justify-between'>
                <div>
                    <p className='textColor'>Degrees</p>
                    <input type="Number" placeholder='Enter Degree...' className='border placeholder:italic border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' onChange={(e) => setInput(e.target.value)} required />
                </div>
                <div  className='lg:my-0 my-[1.5rem]'>
                    <p className='textColor'>Type</p>
                    <label>
                        <select className='border border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' onChange={(e) => setTemp(e.target.value)}>
                            <option value=""></option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                        </select>
                    </label>
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