import { Card, FormControl, TextField, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import {
  useCreateaAlgorithmMutation,
  useGetAlgorithmsQuery,
} from '../../services/algorithmService';

const AlgorithmCreatePage = () => {
  const { data, isFetching } = useGetAlgorithmsQuery();

  const [create, result] = useCreateaAlgorithmMutation();

  const [form, setForm] = useState({
    title: '',
    constraints: '',
    problemStatement: '',
    difficultyLevel: 'HARD',
  });

  const createAlgorithm = (e) => {
    e.preventDefault();
    create(form);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result?.isSuccess) {
      navigate('/admin/algorithms');
    }
  }, [result.isSuccess]);

  return (
    <Layout>
      <Card sx={{ padding: 4 }}>
        <Typography>Yeni Mövzu</Typography>
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
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </FormControl>
          </div>
          <div className='mt-3'>
            <Typography>Təsvir</Typography>
            <FormControl fullWidth>
              <Editor
                apiKey='p0h5rgakj2fe8nyg5m4bqr5bjv68g57oqj2kn2s0tpokaf46'
                value={form.problemStatement}
                onChange={(e) => setForm({ ...form, problemStatement: e.target.getContent() })}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                  ],
                  toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help | superscript subscript',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
              />
            </FormControl>
          </div>
          <div className='mt-3'>
            <Typography>Məhdudiyyətlər</Typography>
            <FormControl fullWidth>
              <Editor
                apiKey='p0h5rgakj2fe8nyg5m4bqr5bjv68g57oqj2kn2s0tpokaf46'
                value={form.constraints}
                onChange={(e) => setForm({ ...form, constraints: e.target.getContent() })}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                  ],
                  toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help | superscript subscript',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
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
            <button className='btn btn-primary'>Yarat</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
};

export default AlgorithmCreatePage;
