import { BrowserRouter , Route , Routes } from "react-router-dom"
import "./style.css"
import MainPage from "./components/MainPage"
import { AdminPage } from "./components/AdminPage"

const App = () =>{
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainPage/>} path="/"/>
      <Route element={<AdminPage/>} path="/AdminPanel"/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
