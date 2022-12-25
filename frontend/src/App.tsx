import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Todo from './pages/todo/Todo'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from "recoil";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
