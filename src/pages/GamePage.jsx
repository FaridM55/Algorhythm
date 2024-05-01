import { CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import GameCard from '../components/GameCard';
import Layout from '../components/Layout';
import { useGetAlgorithmsQuery } from '../services/algorithmService';
import LoadingPage from './LoadingPage';

const GamePage = () => {
  const { data, isLoading } = useGetAlgorithmsQuery();

  const { isAuth } = useSelector((state) => state.auth);

  if (isLoading) return <LoadingPage />;

  return (
    <Layout active='game'>
      <Helmet>
        <title>Oyun</title>
      </Helmet>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-white title'>Mövzular</h1>
          <p className='text-white'>
            {isAuth ? 'Tapşırıqları həll etmək üçün keçid edin.' : 'Keçid etmək üçün giriş edin.'}
          </p>
        </div>
        {isLoading && (
          <div className='col-12'>
            <CircularProgress />
          </div>
        )}
        {data?.map((item) => (
          <GameCard key={item.id} title={item.title} id={item.id} />
        ))}
      </div>
    </Layout>
  );
};

export default GamePage;
