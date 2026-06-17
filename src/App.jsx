import { Routes, Route, Link, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// from
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </>
  );
}
// to
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
