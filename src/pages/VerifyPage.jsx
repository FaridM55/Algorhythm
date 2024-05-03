import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useVerifyMutation } from '../services/authService';

const VerifyPage = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [code, setCode] = useState('');
  const [verify, result] = useVerifyMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    verify({
      email: searchParams.get('email'),
      verificationCode: code,
    });
  };

  useEffect(() => {
    if (result.error?.data === 'User verified successfully') {
      navigate('/login');
    }
  }, [result.isError]);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  if (isAuth) return null;

  return (
    <div className='sign-page'>
      <Helmet>
        <title>Təsdiq</title>
      </Helmet>
      <div className='form p-5'>
        <div className='w-100'>
          <h1 className='title text-white fw-bold mb-5'>Təsdiq</h1>
          <form onSubmit={handleLogin}>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                id='outlined-basic'
                label='Kod'
                variant='outlined'
                sx={{ width: '100%' }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <Button variant='contained' type='submit' fullWidth disabled={result.isLoading}>
              GÖndər
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

export default VerifyPage;
