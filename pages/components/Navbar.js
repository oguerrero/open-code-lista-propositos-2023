import { supabase } from "../../supabaseConfig"

export default function Navbar () {
  const [session, setSession] = useState()
  const [user, setUser] = useState()
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    const { session, user } = data
    setSession(session)
    setUser(user)
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <nav className='w-full h-8 px-8 py-2 flex flex-row'>
      { session }
      { user }
      { session && <button onClick={ handleSignOut }>Sign Out</button> }
      { !session && (
        <div className='flex flex-row gap-4 justify-end w-full'>
          <button
            onClick={ handleLogin }
            href='/login'>
            Login
          </button>
        </div>
      ) }
    </nav>
  )
}
