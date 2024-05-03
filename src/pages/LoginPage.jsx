import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../services/authService';

const LoginPage = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, result] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  if (isAuth) return null;

  return (
    <div className='sign-page'>
      <Helmet>
        <title>Daxil ol</title>
      </Helmet>
      <div className='form p-5'>
        <div className='w-100'>
          <h1 className='title text-white fw-bold mb-5'>Daxil ol</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                type='email'
                id='outlined-basic'
                label='Email'
                variant='outlined'
                sx={{ width: '100%' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                type='password'
                id='outlined-basic'
                label='Şifrə'
                variant='outlined'
                sx={{ width: '100%' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button variant='contained' type='submit' fullWidth disabled={result.isLoading}>
              Daxil ol
            </Button>
            {result.isError && (
              <p className='text-danger mt-2'>
                {typeof result?.error?.data === 'string' ? result?.error?.data : 'Xəta baş verdi'}
              </p>
            )}
          </form>
          <div className='mt-3 w-100 d-flex justify-content-end'>
            <Button variant='text' onClick={() => navigate('/register')}>
              Qeydiyyat
            </Button>
            {/* <Button variant='text'>Şifrəni unutdum</Button> */}
          </div>
        </div>
      </div>
      <div className='bg-image'></div>
    </div>
  );
};

export default LoginPage;
