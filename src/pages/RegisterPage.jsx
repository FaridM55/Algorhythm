import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../services/authService';

const RegisterPage = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  const [register, result] = useRegisterMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    register({
      email,
      password,
      firstName,
      lastName,
      userName,
    });
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  useEffect(() => {
    if (result.isError && result.error?.data === 'Register') {
      navigate(`/verify?email=${email}`);
    }
  }, [result]);

  if (isAuth) return null;

  return (
    <div className='sign-page'>
      <Helmet>
        <title>Qeydiyyat</title>
      </Helmet>
      <div className='form p-5'>
        <div className='w-100'>
          <h1 className='title text-white fw-bold mb-5'>Qeydiyyat</h1>
          <form onSubmit={handleRegister}>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                type='text'
                id='outlined-basic'
                label='Ad'
                variant='outlined'
                sx={{ width: '100%' }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                type='text'
                id='outlined-basic'
                label='Soyad'
                variant='outlined'
                sx={{ width: '100%' }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className='mb-3 w-100'>
              <TextField
                error={result.isError}
                type='text'
                id='outlined-basic'
                label='Nik'
                variant='outlined'
                sx={{ width: '100%' }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
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
              Qeydiyyat
            </Button>
            {result.isError && result.status != 201 && (
              <p className='text-danger mt-2'>
                {typeof result?.error?.data === 'string' ? result?.error?.data : 'Xəta baş verdi'}
              </p>
            )}
          </form>

          <div className='mt-3 w-100 d-flex justify-content-end'>
            <Button variant='text' onClick={() => navigate('/login')}>
              Daxil ol
            </Button>
            {/* <Button variant='text'>Şifrəni unutdum</Button> */}
          </div>
        </div>
      </div>
      <div className='bg-image'></div>
    </div>
  );
};

export default RegisterPage;
