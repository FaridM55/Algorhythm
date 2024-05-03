import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useGetMessagesQuery } from '../services/messageService';

const MessagePage = () => {
  const { id } = useParams();

  const { data: messages } = useGetMessagesQuery(id);

  return <Layout active='discussion'></Layout>;
};

export default MessagePage;
