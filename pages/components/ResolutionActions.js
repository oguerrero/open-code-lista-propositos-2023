// REACT
import { useState } from 'react'

export default function ResolutionActions() {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [resolutionText, setResolutionText] = useState('')


  const inputToogle = () => setIsInputVisible(!isInputVisible)

  const saveResolution = () => {
  }

  return (
    <>
      <div className=''>
        <button
          className='h-8 font-semibold text-white cursor-pointer w-60 bg-violet-700 rounded-2xl'
          onClick={inputToogle}>
          Add New Year&apos;s resolution
        </button>
      </div>

      {isInputVisible && (
        <div className='flex flex-col gap-2'>
          <input
            className='w-60 h-8 mt-2 outline-none rounded-md border-2 border-gray-400 px-4 py-2'
            placeholder='Enter the resolution...'
            onChange={(e) => setResolutionText(e.target.value)}
          />
          <button
            className='w-60 h-8 cursor-pointer bg-rose-800 text-white'
            onClick={saveResolution}>
            Save
          </button>
        </div>
      )}
    </>
  )
}
