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
      return user?.roleName?.find((role) => role === 'ADMIN') !== undefined;
    } else {
      return false;
    }
  }, [isAuth, user]);

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
              <Link
                className={classNames('nav-link', { active: active === 'discussion' })}
                aria-current='page'
                to='/discussion'
              >
                İcma
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={classNames('nav-link', { active: active === 'contact' })}
                aria-current='page'
                to='/contact'
              >
                Əlaqə
              </Link>
            </li>

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
                    to='/admin/conversation-topics'
                  >
                    İcma Mövzuları
                  </Link>
                  <Link
                    className={classNames('dropdown-item', { active: active === 'game' })}
                    aria-current='page'
                    to='/admin/algorithms'
                  >
                    Alqoritmlər
                  </Link>
                  <Link
                    className={classNames('dropdown-item', { active: active === 'game' })}
                    aria-current='page'
                    to='/admin/subjects'
                  >
                    Mövzular
                  </Link>
                  <Link
                    className={classNames('dropdown-item', { active: active === 'game' })}
                    aria-current='page'
                    to='/admin/algorithms/tags'
                  >
                    Teqlər
                  </Link>
                </ul>
              </li>
            )}

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
                    <Link
                      className={classNames('dropdown-item', { active: active === 'profile' })}
                      aria-current='page'
                      to='/profile'
                    >
                      Profil
                    </Link>
                  </li>
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
