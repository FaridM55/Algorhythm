import { Card, FormControl, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import {
  useCreateDifficultyMutation,
  useGetDifficultiesQuery,
} from '../../services/difficultyService';

const AlgorithmTagUpdatePage = () => {
  const [create, result] = useCreateDifficultyMutation();

  const { data: tags } = useGetDifficultiesQuery();

  const [form, setForm] = useState({
    tag: '',
  });

  const createAlgorithm = (e) => {
    e.preventDefault();
    create(form);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Difficulty added successfully!') {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu əməliyyat',
          text: 'Algorithm uğurla yaradıldı',
        });
        navigate('/admin/algorithms/tags');
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
          <Typography>Yeni Teq</Typography>
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
                  value={form.tag}
                  onChange={(e) => setForm({ ...form, tag: e.target.value })}
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
              <button className='btn btn-primary'>Yarat</button>
            </div>
          </form>
        </Card>
      </Layout>
    </Admin>
  );
};

export default AlgorithmTagUpdatePage;
