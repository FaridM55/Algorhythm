import { Card, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Layout from '../../components/Layout';
import { useGetAlgorithmsQuery } from '../../services/algorithmService';

const AlgorithmListPage = () => {
  const { data, isFetching } = useGetAlgorithmsQuery();

  return (
    <Layout>
      <Card sx={{ padding: 4 }}>
        <Typography>Mövzular</Typography>
        <DataGrid
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
            },
            {
              field: 'actions',
              headerName: 'Əməliyyatlar',
              flex: 1,
              renderCell: (params) => {
                return (
                  <div>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        console.log(params.row.id);
                      }}
                    >
                      Redaktə et
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
  );
};

export default AlgorithmListPage;
