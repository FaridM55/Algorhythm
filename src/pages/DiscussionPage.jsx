import { Helmet } from 'react-helmet-async';
import CreateDiscussion from '../components/CreateDiscussion';
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
      <CreateDiscussion />
      <div className='row mt-5'>
        {conversations?.map((item) => (
          <div key={item.id} className='col-3'>
            <div className='card info-card game-card' style={{ minHeight: 'auto' }}>
              <div className='flex-1 d-flex justify-content-between align-items-center'>
                <h2 className='text-white fw-bold'>{item.conversationName}</h2>
                <span className='badge badge-warning text-warning'>{item.topicName}</span>
              </div>
              {/* <Link to={`/discussion/${item.id}`}>
                <Button variant='contained' color='secondary'>
                  Ətraflı
                </Button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DiscussionPage;
