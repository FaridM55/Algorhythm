import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useMeQuery } from './services/userService';
import './styles/app.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const { isAuth } = useSelector((state) => state.auth);

  useMeQuery(undefined, {
    skip: !isAuth,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
