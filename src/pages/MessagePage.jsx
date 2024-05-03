import { Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useGetConversationQuery } from '../services/conversationService';
import { useGetMessagesQuery, useSendMessageMutation } from '../services/messageService';

const MessagePage = () => {
  const { id } = useParams();

  const { data: conversation } = useGetConversationQuery(id);
  const { data: messages } = useGetMessagesQuery(id);

  const [message, setMessage] = useState('');

  const [send, result] = useSendMessageMutation();

  const handleSendMessage = (e) => {
    e.preventDefault();
    send({ id, message });
    setMessage('');
  };

  return (
    <Layout active='discussion'>
      <Helmet>
        <title>{conversation?.conversationName}</title>
      </Helmet>
      <h1 className='text-white title'>{conversation?.conversationName}</h1>
      <span className='bg-warning p-2 rounded'>{conversation?.topicName}</span>
      <div className='row mt-5'>
        <div className='col-12'>
          {messages?.map((item) => (
            <div
              className='card info-card game-card d-flex align-items-center justify-content-start flex-row mb-1'
              style={{ minHeight: 'auto' }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${item.userDto.firstName}+${item.userDto.lastName}&background=0D8ABC&color=fff&rounded=true`}
                style={{ width: 50, height: 50, borderRadius: 50, objectFit: 'cover' }}
              />
              <div className='div'>
                <span className='fw-bold'>
                  {item.userDto.firstName} {item.userDto.lastName}
                </span>
                <p className='text-white m-0'>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='card info-card game-card mt-4'>
        <form onSubmit={handleSendMessage}>
          <div className='mb-3'>
            <FormControl fullWidth>
              <TextField
                label='Mesaj'
                variant='outlined'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                multiline
                rows={4}
              />
            </FormControl>
          </div>

          <div className='mb-3'>
            <Button variant='contained' color='secondary' type='submit'>
              Mesajı göndər
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default MessagePage;
