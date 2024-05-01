import { Box, CircularProgress } from '@mui/material';

const LoadingPage = () => {
  return (
    <Box
      className='bg'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingPage;
