import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/">
          <h1>logo</h1>
        </Link>
        <div>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
