import "./App.css";
import {
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import useAuth from "./hookAuth";

function Page1() {
  return <>PAGE 1</>;
}

function Page2() {
  return <>PAGE 2</>;
}

function Home() {
  return (
    <section>
      <Link to="/page1">Go to the page1</Link>
      <br />
      <Link to="/page2">Go to the page2</Link>
      <br />
      <Link to="/login">Go to the Login</Link>
      <br />
      <Link to="/register">Go to the register</Link>
    </section>
  );
}

function RequireAuth({ roles }) {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth.auth.roles)
  return (
    auth?.auth?.roles?.find((role) => roles?.includes(role))
    ? <Outlet />
    : auth?.auth?.user
      ? <Navigate to="/unauthorized" state={{ from: location }} replace/>
      : <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const OnLogin = (e) => {

    e.preventDefault()
    setAuth({ user: 'eu', roles: ["CONSUMER"]})
    navigate(from, {replace: true})
  }
  //   } catch (e) {
  //   tratamento para cada tipo de erro
  //   }
  return (
    <>
      LOGIN <button onClick={OnLogin}>LOGIN MOCK BTN</button>
      <br />
      <Link to="/register">Go to the register</Link>
    </>
  );
}

function Register() {
  return (
    <>
      REGISTER
      <br />
      <Link to="/login">Go to the Login</Link>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Paginas</h1>

      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<RequireAuth roles={["CONSUMER"]} />}>
            <Route path="home" element={<Home />} />
          </Route>
            <Route path="page2" element={<Page2 />} />
          <Route element={<RequireAuth roles={["ADMIN"]} />}>
            <Route path="page1" element={<Page1 />} />
          </Route>

            <Route path="unauthorized" element={<h1> SEM AUTORIZAÇÃO</h1>} />
          <Route path="/" element={ <Navigate to="/login" replace /> }/>

      </Routes>
    </div>
  );
}

export default App;
