import { Link } from 'react-router-dom' 

export function Home() {
    return (
      <section>
        <Link to="/page1">Go to the page1</Link>
        <br />
        <Link to="/page2">Go to the BLOCKED ROUTER</Link>
        <br />
        <Link to="/login">Go to the Login</Link>
        <br />
        <Link to="/register">Go to the register</Link>
      </section>
    );
  }