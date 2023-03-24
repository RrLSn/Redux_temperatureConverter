import React from 'react'

const ConverterCard = () => {
  return (
    <div className='w-[80vw] h-[50vh] m-[auto] rounded-2xl bg-[#f3f6fa] flex place-items-center'>
        <div className='w-[70%] h-[20rem] bg-white m-[auto] rounded-lg shadow-xl p-[3rem]'>
            <span className='flex justify-between'>
                <div>
                    <p className='textColor'>Degrees</p>
                    <input type="text" className='border border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none' />
                </div>
                <div>
                    <p className='textColor'>Type</p>
                    <select name="" id="" className='border border-[#cccccc] p-[0.5rem] w-[15rem] focus:outline-none'>
                        <option value=""></option>
                        <option value="">Celsius</option>
                        <option value="">Fahrenheit</option>
                    </select>
                </div>
                <button className='w-[13rem] bg-[#5596f6] text-white font-[500] mt-[1.9rem] h-[3rem]'>Convert</button>
            </span>
            <div className='mt-[3.5rem]'>
                <p className='textColor'>Result</p>
                <h1></h1>
            </div>
        </div>
    </div>
  )
}

export default ConverterCard