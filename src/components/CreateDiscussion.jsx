import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { useCreateConversationMutation } from '../services/conversationService';
import { useGetConversationTopicsQuery } from '../services/conversationTopicService';

const CreateDiscussion = () => {
  const { data: topics } = useGetConversationTopicsQuery();

  const [create] = useCreateConversationMutation();

  const [form, setForm] = useState({
    conversationName: '',
    topicName: '',
  });

  const createConversation = (e) => {
    e.preventDefault();
    create(form);
    setForm({
      conversationName: '',
      topicName: '',
    });
  };

  return (
    <div className='card game-card info-card'>
      <form onSubmit={createConversation}>
        <div className='mb-3'>
          <FormControl fullWidth>
            <TextField
              label='Başlıq'
              variant='outlined'
              onChange={(e) => setForm({ ...form, conversationName: e.target.value })}
              value={form.conversationName}
              required
            />
          </FormControl>
        </div>

        <div className='mb-3'>
          <FormControl fullWidth>
            <Select
              required
              value={form.topicName}
              onChange={(e) => setForm({ ...form, topicName: e.target.value })}
              displayEmpty
            >
              {topics?.map((topic) => (
                <MenuItem key={topic.id} value={topic.topic}>
                  {topic.topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='d-flex justify-content-end'>
          <Button variant='contained' type='submit' color='success'>
            Əlavə et
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDiscussion;
