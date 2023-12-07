import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost"
export default function App() {
  // state to check if user is logged in or not
  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/login" >Login</Link>
        <Link to="/createpost" >CreatePost</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* passing state as prop to the login component */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}


