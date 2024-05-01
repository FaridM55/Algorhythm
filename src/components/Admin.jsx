import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = ({ children }) => {
  const navigate = useNavigate();

  const { isAuth, user } = useSelector((state) => state.auth);

  if (!isAuth) {
    navigate('/login');
  }

  if (user?.roleName?.find((role) => role === 'ADMIN') === undefined) {
    navigate('/login');
  }

  return children;
};

export default Admin;
