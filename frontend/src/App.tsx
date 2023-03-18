import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Todo from './pages/todo/Todo';
import Draw from './pages/draw/Draw';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/draw" element={<Draw />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
