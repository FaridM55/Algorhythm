import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAlgorithmSubmitMutation, useGetAlgorithmQuery } from '../services/algorithmService';
import LoadingPage from './LoadingPage';

const TaskPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.auth);

  const { data, isLoading, isError } = useGetAlgorithmQuery(id);

  const [submit, result] = useAlgorithmSubmitMutation();

  const [language, setLanguage] = useState('JAVA');
  const [input, setInput] = useState('');

  const [message, setMessage] = useState('');

  const languages = [
    {
      label: 'JAVA',
      value: 'JAVA',
    },
    {
      label: 'C',
      value: 'C_LANGUAGE',
    },
    {
      label: 'C++',
      value: 'CPP',
    },
    {
      label: 'PHP',
      value: 'PHP',
    },
    {
      label: 'PYTHON3',
      value: 'PYTHON3',
    },
    {
      label: 'GO',
      value: 'GO',
    },
    {
      label: 'NODEJS',
      value: 'NODEJS',
    },
    {
      label: 'KOTLIN',
      value: 'KOTLIN',
    },
    {
      label: 'RUBY',
      value: 'RUBY',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    submit({ programmingLanguages: language, solutionCode: input, id });
  };

  useEffect(() => {
    if (result?.isSuccess) {
      if (result?.data?.successful) {
        setMessage('Təsdiq edildi');
      } else {
        setMessage('Təsdiq edilmədi');
      }
    }
  }, [result]);

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    navigate('/404');
  }

  return (
    <Layout>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-white title'>{data?.title}</h1>
        </div>
        <div className='col-md-6 mt-2'>
          <div className='info-card card p-5'>
            <h2 className='text-warning'>Təsvir</h2>
            <p dangerouslySetInnerHTML={{ __html: data?.problemStatement }} />
            {data?.testCases?.length > 0 && (
              <>
                <h2 className='text-warning mt-2'>Giriş verilənləri</h2>
                {data?.testCases.map((testCase, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: testCase?.testCase }} />
                ))}
                <h2 className='text-warning mt-2'>Çıxış verilənləri</h2>
                {data?.testCases.map((testCase, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: testCase?.correctAnswer }} />
                ))}
              </>
            )}
            {data?.constraints?.length > 0 && (
              <>
                <h2 className='text-warning'>Məhdudiyyətlər</h2>
                <p dangerouslySetInnerHTML={{ __html: data?.constraints }} />
              </>
            )}
          </div>
        </div>
        <div className='col-md-6 mt-2'>
          <div className='info-card card p-5'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='text-warning'>Giriş</h2>
                </div>
                <div className='col-md-4'>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>Dil</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Dil'
                      required
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      {languages.map((language, index) => (
                        <MenuItem key={language.value} value={language.value}>
                          {language.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className='mt-3'>
                <FormControl fullWidth>
                  <textarea
                    className='form-control'
                    rows={10}
                    required
                    onChange={(e) => setInput(e.target.value)}
                  >
                    {input}
                  </textarea>
                </FormControl>
              </div>
              <div className='mt-3'>
                <Button
                  variant='contained'
                  sx={{ background: '#fff', color: '#000' }}
                  type='submit'
                >
                  Təsdiq et
                </Button>
              </div>
            </form>
          </div>
          <div className='info-card card p-5 mt-3'>
            <h2 className='text-warning'>Çıxış</h2>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TaskPage;
