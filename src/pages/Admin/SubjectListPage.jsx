import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import { useDeleteSubjectMutation, useGetSubjectsQuery } from '../../services/subjectService';

const SubjectListPage = () => {
  const { data, isFetching } = useGetSubjectsQuery();

  const [deleteAlgorithm] = useDeleteSubjectMutation();

  const navigate = useNavigate();

  return (
    <Admin>
      <Layout>
        <Card sx={{ padding: 4, marginTop: 10 }}>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'> Mövzular </h1>
            <Link to='/admin/subjects/create'>
              <button className='btn btn-success'>Yeni</button>
            </Link>
          </div>
          <DataGrid
            rows={data || []}
            getRowId={(row) => row.subjectId}
            columns={[
              {
                field: 'id',
                headerName: 'ID',
              },
              {
                field: 'title',
                headerName: 'Mövzu',
                width: 300,
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
                            deleteAlgorithm(params.row.subjectId);
                            if (result.isConfirmed) {
                              Swal.fire('Silindi!', 'Mövzu silindi.', 'success');
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

export default SubjectListPage;
