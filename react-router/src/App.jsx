import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { Home } from "./routes/Home.jsx"
import { About } from "./routes/About.jsx"
import { Contact } from "./routes/Contact.jsx"
import { Login } from "./routes/Login.jsx"
import { UserProvider } from "./routes/context/UserProvider"

export const App = () => {
  return (
    <UserProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home></Home> }></Route>
          <Route path='/login' element={ <Login></Login> }></Route>
          <Route path='/about' element={ <About></About> }></Route>
          <Route path='/contact' element={ <Contact></Contact> }></Route>
          <Route path='/*' element={ <Navigate to='/'/> }></Route>
        </Routes>
    </UserProvider>
  )
}
