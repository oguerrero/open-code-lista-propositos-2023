import { useState } from "react"

export default function ResolutionActions () {

  const [isInputVisible, setIsInputVisible] = useState(false)
  const [resolutionText, setResolutionText] = useState('')

  const inputToogle = () => setIsInputVisible(!isInputVisible)

  return (
    <>
      <div className=''>
        <button className='h-8 font-semibold text-white border-2 border-black cursor-pointer w-60 bg-violet-700 rounded-2xl'
          onClick={ inputToogle }>
          Add New Year&apos;s resolution
        </button>
      </div>

      { isInputVisible && (
        <div>
          <input className="w-60 h-8 outline-none rounded-md border-gray-800 mx-1" placeholder='Enter the resolution...'
            onChange={ (e) => setResolutionText(e.target.value) } />
        </div>
      ) }
    </>
  )
}
