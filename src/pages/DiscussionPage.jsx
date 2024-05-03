import { Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
          <div key={item.id} className='col-4'>
            <div className='card info-card game-card' style={{ minHeight: 'auto' }}>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='d-flex align-items-center flex-column justify-content-center'>
                    <img
                      src={`https://ui-avatars.com/api/?name=${item.userDto.firstName}+${item.userDto.lastName}&background=0D8ABC&color=fff&rounded=true`}
                      style={{ width: 50, height: 50, borderRadius: 50, objectFit: 'cover' }}
                    />
                    <span className='fw-bold' style={{ fontSize: 12 }}>
                      {item.userDto.firstName} {item.userDto.lastName}
                    </span>
                  </div>
                </div>
                <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                  <h2 className='text-white fw-bold m-0 p-0'>{item.conversationName}</h2>
                </div>
                <div className='col-lg-4'>
                  <div className='d-flex flex-column'>
                    <div className='badge badge-warning text-warning'>#{item.topicName}</div>
                    <Link to={`/discussion/${item.id}`}>
                      <Button variant='contained' color='secondary'>
                        Ətraflı
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DiscussionPage;
