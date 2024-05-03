import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useSolutionCountQuery } from '../services/userService';

const ProfilePage = () => {
  const { user, isAuth } = useSelector((state) => state.auth);

  const { data: count } = useSolutionCountQuery();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  if (!isAuth) return null;

  return (
    <Layout>
      <Helmet>
        <title>Profil</title>
      </Helmet>
      <h1 className='text-white title'>
        {user.firstName} {user.lastName}
      </h1>
      <div className='card info-card game-card'>
        <div className='row'>
          <div className='col-lg-3'>
            <img
              src={`https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=0D8ABC&color=fff&rounded=true`}
              style={{ width: 100, height: 100, borderRadius: 100, objectFit: 'cover' }}
            />
          </div>
          <div className='col-lg-9'>
            <h4 className='text-warning'>Email: </h4>
            <p className='text-white'>{user?.email}</p>

            <h4 className='text-warning'>Həll edilən tapşırıq sayı:</h4>
            <p className='text-white'>{count}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
