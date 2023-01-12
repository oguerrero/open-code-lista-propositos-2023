import { GithubAuthProvider, signInWithRedirect, signOut } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Navbar () {

  const provider = new GithubAuthProvider();

  const handleLogin = () => {
    signInWithRedirect(auth, provider);
  }

  const user = auth.currentUser

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }

  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })

  return (
    <nav className='w-full h-8 px-8 py-2 flex flex-row'>
      { user && <button onClick={ signOut }>Sign Out</button> }
      { !user && (
        <div className='flex flex-row gap-4 justify-end w-full'>
  
          <button onClick={ handleLogin } href='/login'>Login</button>
        </div>
      ) }
    </nav>
  )
}
