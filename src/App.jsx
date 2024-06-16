import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))

  }, [])



  return !loading ? (

    <div className="min-h-screen flex flex-wrap content-between " >
      <div className="w-full block">
        <Header />
        <main>
          {/* TODO: <Outlet /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>

  ) : (<>ohooooooo</>)
}

export default App
