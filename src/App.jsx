import { RouterProvider } from 'react-router';
import Layout from './components/Layout';
import router from './router';

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
