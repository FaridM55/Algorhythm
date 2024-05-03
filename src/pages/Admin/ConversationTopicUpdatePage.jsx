import { Card, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import {
  useGetConversationTopicQuery,
  useUpdateConversationTopicMutation,
} from '../../services/conversationTopicService';

const ConversationTopicUpdatePage = () => {
  const { id } = useParams();

  const { data: topic } = useGetConversationTopicQuery(id);

  const [create, result] = useUpdateConversationTopicMutation();

  const [form, setForm] = useState({
    topic: '',
  });

  useEffect(() => {
    if (topic) {
      setForm({
        topic: topic.topic,
      });
    }
  }, [topic]);

  const createAlgorithm = (e) => {
    e.preventDefault();
    create({ id, ...form });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Difficulty added successfully!') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Mövzu uğurla yadda saxlanıldı',
        });
        navigate('/admin/conversation-topics');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Xəta',
          text: result?.error?.data,
        });
      }
    }

    if (result.isSuccess) {
      Swal.fire({
        icon: 'success',
        title: 'Uğurlu əməliyyat',
        text: 'Mövzu ugurla yaradildi',
      });
      navigate('/admin/conversation-topics');
    }
  }, [result.isError, result.isSuccess]);

  return (
    <Admin>
      <Layout>
        <Card sx={{ padding: 4, marginTop: 10 }}>
          <Typography>Yeni</Typography>
          <form
            action=''
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={createAlgorithm}
          >
            <div className='mt-3'>
              <FormControl fullWidth>
                <TextField
                  label='Başlıq'
                  variant='outlined'
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  required
                />
              </FormControl>
            </div>

            {/* <TextField
            label='Tədris'
            variant='outlined'
            value={form.difficultyLevel}
            onChange={(e) => setForm({ ...form, difficultyLevel: e.target.value })}
          /> */}
            <div className='mt-3'>
              <button className='btn btn-primary'>Yadda saxla</button>
            </div>
          </form>
        </Card>
      </Layout>
    </Admin>
  );
};

export default ConversationTopicUpdatePage;
