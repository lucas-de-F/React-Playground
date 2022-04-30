import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { Page1, Page2 } from './screens/pages';
import Home from './screens/home';
import RequireAuth from './screens/RequireAuth';
import Register from './screens/register';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <h1>Paginas</h1>

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth roles={['CONSUMER']} />}>
          <Route path="home*" element={<Home />} />
        </Route>
        <Route path="page1*" element={<Page1 />} />
        <Route element={<RequireAuth roles={['ADMIN']} />}>
          <Route path="page2" element={<Page2 />} />
        </Route>

        <Route path="unauthorized" element={<h1> SEM AUTORIZAÇÃO</h1>} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route component={(
          <>
            NOT FOUND ROUTER
            <br />
            {' '}
            <Link to="/login">GO TO LOGIN </Link>
            {' '}
          </>
)}
        />
      </Routes>
    </div>
  );
}

export default App;
