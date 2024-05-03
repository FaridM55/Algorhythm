import { Card, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useGetDifficultiesQuery } from '../../services/difficultyService';
import {
  useGetSubjectsQuery,
  useLinkAlgoritmToSubjectMutation,
} from '../../services/subjectService';

const AlgorithmSubjectLinkPage = () => {
  const [link, result] = useLinkAlgoritmToSubjectMutation();

  const { id } = useParams();

  const { data: tags } = useGetDifficultiesQuery();

  const { data: subjects } = useGetSubjectsQuery();

  const [form, setForm] = useState({
    subjectId: null,
  });

  const createAlgorithm = (e) => {
    e.preventDefault();
    link({ id, subjectId: form.subjectId });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (result.isError) {
      if (result?.error?.data === 'Algorithm added to Subject') {
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
                <Select
                  required
                  value={form.subjectId}
                  onChange={(e) => setForm({ ...form, subjectId: e.target.value })}
                  placeholder='Mövzu'
                >
                  {subjects?.map((tag) => (
                    <MenuItem key={tag.subjectId} value={tag.subjectId}>
                      {tag.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* <TextField
            label='Tədris'
            variant='outlined'
            value={form.difficultyLevel}
            onChange={(e) => setForm({ ...form, difficultyLevel: e.target.value })}
          /> */}
            <div className='mt-3'>
              <button className='btn btn-primary'>Bağla</button>
            </div>
          </form>
        </Card>
      </Layout>
    </Admin>
  );
};

export default AlgorithmSubjectLinkPage;
