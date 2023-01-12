import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react'
import { auth } from '../firebaseConfig'

export default function Register () {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleRegister = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // const email = 'temp23@gmail.com'
    // const password = '1324'
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        // ..
      })
  }

  return (
    <div className='flex flex-col items-center justify-between min-h-screen p-24'>
      <form className='flex flex-col gap-8'>
        <input
          type='text'
          placeholder='Email'
          ref={ emailRef }
          className='px-4 py-2 border-gray-400 bg-slate-100 rounded-2xl'
        />
        <input
          type='password'
          placeholder='Password'
          ref={ passwordRef }
          className='px-4 py-2 border-gray-400 bg-slate-100 rounded-2xl'
        />
        <button
          className='px-4 py-2 font-semibold text-white bg-sky-600 rounded-2xl'
          onClick={ handleRegister }>
          Register
        </button>
      </form>
    </div>
  )
}
