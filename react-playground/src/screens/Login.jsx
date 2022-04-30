import { useLocation, useNavigate, Link } from 'react-router-dom';
import useAuth from '../hookAuth';

export function Login() {
    const { setAuth } = useAuth();
  
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
  
    const OnLogin = (e) => {
  
      e.preventDefault()
      setAuth({ user: 'eu', roles: ["CONSUMER"]})
      navigate(from, {replace: true})
    }
    return (
      <>
        LOGIN <button onClick={OnLogin}>LOGIN MOCK BTN</button>
        <br />
        <Link to="/register">Go to the register</Link>
      </>
    );
  }
  