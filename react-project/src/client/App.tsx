import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './client/pages/Home';
import About from './client/pages/About';
import NotFound from './client/pages/NotFound';
import Layout from './components/Layout';
import FormPage from './client/pages/FormPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
