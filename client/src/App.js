import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './componens/Header'
import { userDataSelector } from './store/selectors'

function App() {
  const userSelector = useSelector(userDataSelector)

  useEffect(() => {
    if (userSelector.token) {
      localStorage.setItem('token', userSelector.token)
    }
  }, [userSelector.token])

  return (
    <>
      <Header />
    </>
  )
}

export default App
