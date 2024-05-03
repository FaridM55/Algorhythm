import { Card, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useGetDifficultiesQuery } from '../../services/difficultyService';
import { useGetSubjectQuery, useUpdateSubjectMutation } from '../../services/subjectService';

const SubjectUpdatePage = () => {
  const { id } = useParams();

  const { data: subject } = useGetSubjectQuery(id);

  const [update, result] = useUpdateSubjectMutation();

  const { data: tags } = useGetDifficultiesQuery();

  const [form, setForm] = useState({
    title: '',
    description: '',
    algorithmTag: null,
    rank: 0,
  });

  useEffect(() => {
    if (subject) {
      setForm({
        title: subject.title,
        description: subject.description,
        algorithmTag: subject.algorithmTag,
        rank: subject.rank,
      });
    }
  }, [subject]);

  const createAlgorithm = (e) => {
    e.preventDefault();
    update({
      id,
      ...form,
    });
  };

  const navigate = useNavigate();

  console.log(result);

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Subject created successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Mövzu yadda saxlanıldı',
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

    if (result.isSuccess) {
      Swal.fire({
        icon: 'success',
        title: 'Uğurlu əməliyyat',
        text: 'Mövzu yadda saxlanıldı',
      });
      navigate('/admin/subjects');
    }
  }, [result.isError, result.isSuccess]);

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
              <button className='btn btn-primary'>Yadda saxla</button>
            </div>
          </form>
        </Card>
      </Layout>
    </Admin>
  );
};

export default SubjectUpdatePage;
