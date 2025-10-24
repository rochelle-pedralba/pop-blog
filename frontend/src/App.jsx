import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import PublicLayout from './components/PublicLayout'

export default function App() {

  return (
      // <Router>
      //     <Routes>
      //         <Route element={<PublicLayout/>}>
      //         </Route>
      //
      //         <Route>
      //         </Route>
      //     </Routes>
      // </Router>

      <PublicLayout/>
  )
}