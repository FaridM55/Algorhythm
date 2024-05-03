import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { useGetConversationsQuery } from '../services/conversationService';

const DiscussionPage = () => {
  const { data: conversations } = useGetConversationsQuery();

  return (
    <Layout active='discussion'>
      <Helmet>
        <title>İcma</title>
      </Helmet>
      <h1 className='text-white title'>İcma</h1>
    </Layout>
  );
};

export default DiscussionPage;
