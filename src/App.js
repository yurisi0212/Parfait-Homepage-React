
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Top from './routes/top';
import About from './routes/about';
import Contact from './routes/contact';
import Member from './routes/member';
import Join from './routes/join';
import NotFound from './routes/404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const sub = "/Parfait"
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${sub}/`} element={<Top />} />
        <Route path={`${sub}/about/`} element={<About />} />
        <Route path={`${sub}/contact/`} element={<Contact />} />
        <Route path={`${sub}/member/`} element={<Member />} />
        <Route path={`${sub}/join/`} element={<Join />} />
        <Route path={`${sub}/*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
