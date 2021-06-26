import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <h1>HomePage</h1>
      <p>{isAuthenticated ? 'Authenticated' : 'Not authenticated'}</p>
      <p>
        Current user (json):{' '}
        {currentUser ? JSON.stringify(currentUser, null, 2) : 'null'}
      </p>
      <div>
        <button
          onClick={() => {
            console.log('log in')
            logIn({ appState: { targetUrl: '/beta' } })
          }}
        >
          Log in
        </button>
        <button onClick={() => logOut()} >
          Log out
        </button>
      </div>
    </>
  )
}

export default HomePage
