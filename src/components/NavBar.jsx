import classNames from 'classnames';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../state/authSlice';

const Navbar = ({ active }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAdmin = useMemo(() => {
    if (user) {
      return user?.roleName?.find((role) => role === 'ADMIN');
    } else {
      return false;
    }
  }, [isAuth]);

  const handleLogout = () => {
    dispatch(auth.actions.logout());
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand fw-bold' to='/'>
          AlgoRhythm
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link
                className={classNames('nav-link', { active: active === 'game' })}
                aria-current='page'
                to='/game'
              >
                Oyun
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Əlaqə
              </a>
            </li>
            {isAuth ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Profil
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <button className='dropdown-item' onClick={handleLogout}>
                      Çıxış
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className='nav-item ms-3'>
                <Link
                  className={classNames('ml-3 nav-link bg-white rounded text-black', {
                    active: active === 'login',
                  })}
                  to='/login'
                >
                  Giriş / Qeydiyyat
                </Link>
              </li>
            )}
            {isAdmin && (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Admin Panel
                </a>
                <ul className='dropdown-menu'>
                  <Link
                    className={classNames('dropdown-item', { active: active === 'game' })}
                    aria-current='page'
                    to='/admin/algorithms'
                  >
                    Alqoritmlər
                  </Link>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
