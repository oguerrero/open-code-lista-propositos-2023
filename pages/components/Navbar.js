export default function Navbar() {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'https://example.com/welcome'
      }
    })
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <nav className='w-full h-8 px-8 py-2 flex flex-row'>
      {user && <button onClick={handleSignOut}>Sign Out</button>}
      {!user && (
        <div className='flex flex-row gap-4 justify-end w-full'>
          <button
            onClick={handleLogin}
            href='/login'>
            Login
          </button>
        </div>
      )}
    </nav>
  )
}
