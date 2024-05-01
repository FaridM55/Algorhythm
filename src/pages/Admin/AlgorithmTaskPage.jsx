import { Card, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useAlgorithmAddTestCaseMutation } from '../../services/algorithmService';

const AlgorithmTaskPage = () => {
  const { id } = useParams();

  const [create, result] = useAlgorithmAddTestCaseMutation();

  const [form, setForm] = useState({
    correctAnswer: '',
    testCase: '',
  });

  const createAlgorithm = (e) => {
    e.preventDefault();
    create({ id, ...form });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Algorithm test case added successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Tapşırıq uğurla yaradıldı',
        });
        navigate('/admin/algorithms');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Xəta',
          text: result?.error?.data,
        });
      }
    }
  }, [result.isError]);

  return (
    <Admin>
      <Layout>
        <Card sx={{ padding: 4, marginTop: 10 }}>
          <Typography>Yeni Tapşırıq</Typography>
          <form
            action=''
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={createAlgorithm}
          >
            <div className='mt-3'>
              <FormControl fullWidth>
                <TextField
                  label='Düzgün cavab'
                  variant='outlined'
                  value={form.correctAnswer}
                  onChange={(e) => setForm({ ...form, correctAnswer: e.target.value })}
                />
              </FormControl>
            </div>
            <div className='mt-3'>
              <FormControl fullWidth>
                <TextField
                  label='Test'
                  variant='outlined'
                  value={form.testCase}
                  onChange={(e) => setForm({ ...form, testCase: e.target.value })}
                />
              </FormControl>
            </div>
            {/* <div className='mt-3'>
              <Typography>Test</Typography>
              <FormControl fullWidth>
                <Editor
                  apiKey='p0h5rgakj2fe8nyg5m4bqr5bjv68g57oqj2kn2s0tpokaf46'
                  value={form.testCase}
                  onEditorChange={(e) => setForm({ ...form, testCase: e })}
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
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                />
              </FormControl>
            </div> */}
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
    </Admin>
  );
};

export default AlgorithmTaskPage;
