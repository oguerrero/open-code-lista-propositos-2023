import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebaseConfig'

export default function Login() {
  const email = ''
  const password = ''
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })

  return <div></div>
}
