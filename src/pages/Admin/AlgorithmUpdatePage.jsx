import { Card, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useGetAlgorithmQuery, useUpdateAlgorithmMutation } from '../../services/algorithmService';
import { useGetDifficultiesQuery } from '../../services/difficultyService';

const AlgorithmUpdatePage = () => {
  const { id } = useParams();

  const { data: algorithm } = useGetAlgorithmQuery(id);

  const [create, result] = useUpdateAlgorithmMutation();

  const { data: tags } = useGetDifficultiesQuery();

  const [form, setForm] = useState({
    title: '',
    constraints: '',
    problemStatement: '',
    difficultyLevel: undefined,
  });

  useEffect(() => {
    if (algorithm) {
      setForm({
        title: algorithm.title,
        constraints: algorithm.constraints,
        problemStatement: algorithm.problemStatement,
        difficultyLevel: algorithm.difficulty,
      });
    }
  }, [algorithm]);

  const createAlgorithm = (e) => {
    e.preventDefault();
    create({ id, ...form });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Algorithm added successfully') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Algorithm uğurla yaradıldı',
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

    if (result.isSuccess) {
      Swal.fire({
        icon: 'success',
        title: 'Uğurlu əməliyyat',
        text: 'Algorithm uğurla yaradıldı',
      });
      navigate('/admin/algorithms');
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
                />
              </FormControl>
            </div>
            <div className='mt-3'>
              <FormControl fullWidth>
                <Select
                  required
                  value={form.difficultyLevel}
                  onChange={(e) => setForm({ ...form, difficultyLevel: e.target.value })}
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
                  value={form.problemStatement}
                  onEditorChange={(e) => setForm({ ...form, problemStatement: e })}
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
            <div className='mt-3'>
              <Typography>Məhdudiyyətlər</Typography>
              <FormControl fullWidth>
                <Editor
                  apiKey='p0h5rgakj2fe8nyg5m4bqr5bjv68g57oqj2kn2s0tpokaf46'
                  value={form.constraints}
                  onEditorChange={(e) => setForm({ ...form, constraints: e })}
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

export default AlgorithmUpdatePage;
