import { Link, Outlet, Route, Routes } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Test }from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Student } from "./pages/props";
import DataDetail from "./components/DataDetail";

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
        <br />
        <Link to="/test">Test</Link>
        <br/>

        <Link to="/Student">Student</Link>
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
        <Route index element={< Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact name={":Tech AI"} location={":New BANESHWOR"} classes={":BScCSIT"} />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="props" element={<Student name={"Dipal Tamang"} age={"20"} course={"Cyber Nexus"}/>} /> 
        <Route path=":id" element ={<DataDetail />} />
      </Route>
    </Routes>
  );
}
