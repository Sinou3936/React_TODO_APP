import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import List from "./pages/List";
import Main from "./pages/Main";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="/new" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

