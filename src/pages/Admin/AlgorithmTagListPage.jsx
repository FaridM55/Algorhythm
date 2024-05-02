import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import {
  useDeleteDifficultyMutation,
  useGetDifficultiesQuery,
} from '../../services/difficultyService';

const AlgorithmTagListPage = () => {
  const { data, isFetching } = useGetDifficultiesQuery();

  const [deleteAlgorithm] = useDeleteDifficultyMutation();

  const navigate = useNavigate();

  return (
    <Admin>
      <Layout>
        <Card sx={{ padding: 4, marginTop: 10 }}>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'> Alqoritmlər </h1>
            <Link to='/admin/algorithms/tags/create'>
              <button className='btn btn-success'>Yeni</button>
            </Link>
          </div>
          <DataGrid
            getRowId={(row) => row}
            rows={data || []}
            columns={[
              {
                field: 'id',
                headerName: 'ID',
              },
              {
                field: 'title',
                headerName: 'Mövzu',
                width: 300,
                renderCell: (params) => {
                  return <div>{params.row}</div>;
                },
              },
              {
                field: 'actions',
                headerName: 'Əməliyyatlar',
                flex: 1,
                renderCell: (params) => {
                  return (
                    <div className='d-flex align-items-center' style={{ gap: 10, marginTop: 5 }}>
                      <button className='btn btn-warning' disabled onClick={() => {}}>
                        Redaktə et
                      </button>

                      <button
                        className='btn btn-danger'
                        onClick={() => {
                          Swal.fire({
                            title: 'Əminsiniz?',
                            text: 'Silmək istədiyinizdən əminsinizmi?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Əminsiniz',
                          }).then((result) => {
                            deleteAlgorithm(params.row);
                            if (result.isConfirmed) {
                              Swal.fire('Silindi!', 'Teq silindi.', 'success');
                            }
                          });
                        }}
                      >
                        Sil
                      </button>
                    </div>
                  );
                },
              },
            ]}
            loading={isFetching}
          />
        </Card>
      </Layout>
    </Admin>
  );
};

export default AlgorithmTagListPage;
