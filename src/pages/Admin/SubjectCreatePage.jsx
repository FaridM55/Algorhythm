import { Card, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useGetDifficultiesQuery } from '../../services/difficultyService';
import { useCreateSubjectMutation } from '../../services/subjectService';

const SubjectCreatePage = () => {
  const [create, result] = useCreateSubjectMutation();

  const { data: tags } = useGetDifficultiesQuery();

  const [form, setForm] = useState({
    title: '',
    description: '',
    algorithmTag: null,
    rank: 0,
  });

  const createAlgorithm = (e) => {
    e.preventDefault();
    create(form);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Subject created successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Algorithm uğurla yaradıldı',
        });
        navigate('/admin/subjects');
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
                  required
                />
              </FormControl>
            </div>
            <div className='mt-3'>
              <FormControl fullWidth>
                <Select
                  required
                  value={form.algorithmTag}
                  onChange={(e) => setForm({ ...form, algorithmTag: e.target.value })}
                  placeholder='Teq'
                >
                  {tags?.map((tag) => (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className='mt-3'>
              <Typography>Təsvir</Typography>
              <FormControl fullWidth>
                <Editor
                  apiKey='p0h5rgakj2fe8nyg5m4bqr5bjv68g57oqj2kn2s0tpokaf46'
                  value={form.description}
                  onEditorChange={(e) => setForm({ ...form, description: e })}
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
    </Admin>
  );
};

export default SubjectCreatePage;
