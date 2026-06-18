import { Routes, Route, Link, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ContactComponent, { Test } from "./pages/Contact";

// from   
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <Link to="/test">Test</Link>
      </nav>
      <Outlet />
    </>
  );
}
// to
// https://github.com/samarth44600/vite-react-app
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactComponent name={"Tech AI"} location={"New BaNESHWOR"} classes={"CSIT"} />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
