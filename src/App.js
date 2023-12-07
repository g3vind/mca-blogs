import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { FaHome } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";

export default function App() {
  // state to check if user is logged in or not
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          Home <FaHome />
        </Link>

        {isAuth ? (
          <>
            <Link to="/createpost">CreatePost</Link>
            <button className="logoutBtn" onClick={signUserOut}>
              Logout <HiOutlineLogout />
            </button>
          </>
        ) : (
          <Link to="/login" style={{ marginLeft: "50px" }}>
            Login <IoLogIn />
          </Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        {/* passing state as prop to the login component */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}
