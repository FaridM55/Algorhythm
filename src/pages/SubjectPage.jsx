import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useGetSubjectQuery } from '../services/subjectService';
import LoadingPage from './LoadingPage';

const SubjectPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSubjectQuery(id);

  if (isLoading) return <LoadingPage />;

  return (
    <Layout>
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>

      <h1 className='text-white title'>{data?.title}</h1>

      <div className='card info-card game-card'>
        <div className='flex-1 d-flex justify-content-start'>
          <h2 className='text-warning'>Təsvir</h2>
        </div>
        <p className='text-white' dangerouslySetInnerHTML={{ __html: data?.description }}></p>
      </div>
    </Layout>
  );
};

export default SubjectPage;
