
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/about/`} element={<About />} />
        <Route path={`/contact/`} element={<Contact />} />
        <Route path={`/member/`} element={<Member />} />
        <Route path={`/join/`} element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
