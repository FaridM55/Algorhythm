import { Card } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Admin from '../../components/Admin';
import Layout from '../../components/Layout';
import {
  useDeleteConversationMutation,
  useGetConversationsQuery,
} from '../../services/conversationService';

const ConversationListPage = () => {
  const { data, isFetching } = useGetConversationsQuery();

  const [deleteAlgorithm] = useDeleteConversationMutation();

  const navigate = useNavigate();

  return (
    <Admin>
      <Layout>
        <Card sx={{ padding: 4, marginTop: 10 }}>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='mb-3'> Icma </h1>
          </div>
          <DataGrid
            rows={data || []}
            columns={[
              {
                field: 'id',
                headerName: 'ID',
              },
              {
                field: 'conversationName',
                headerName: 'Başlıq',
                width: 300,
              },
              {
                field: 'topicName',
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
                            deleteAlgorithm(params.row.id);
                            if (result.isConfirmed) {
                              Swal.fire('Silindi!', 'Icma silindi.', 'success');
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

export default ConversationListPage;
