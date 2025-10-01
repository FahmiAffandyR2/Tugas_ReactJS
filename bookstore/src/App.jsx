import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Books from "./pages/auth/books/index";
import Login from "./pages/auth/login/index";
import Register from "./pages/auth/register/index";
import Team from "./components/shared/Team";
import Contact from "./components/shared/Contact";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <div className="container">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/ >} />
                    <Route path="/books" element={<Books />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/team" element={<Team/ >}/>
                    <Route path="/contact" element={<Contact/ >}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
      </div>
    </>
  )
}

export default App
