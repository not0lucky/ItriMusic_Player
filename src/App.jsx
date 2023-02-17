import { AlbumPage,HomePage } from "./pages"
import {Routes,Route} from "react-router-dom"
import AppContext from "./utils/context"

function App() {

  return (
    <>
    <AppContext>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Album/:id" element={<AlbumPage/>}></Route>
      </Routes>
    </AppContext>
    </>
  )
}

export default App
