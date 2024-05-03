import { Button, FormControl, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import Layout from '../components/Layout';
import { useSendContactMutation } from '../services/contactService';

const ContactPage = () => {
  const [send, result] = useSendContactMutation();

  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(form);
  };

  useEffect(() => {
    if (result.isSuccess) {
      setForm({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
      Swal.fire({
        icon: 'success',
        title: 'Ugurlu əməliyyat',
        text: 'Mesajiniz ugurla gonderildi',
      });
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      console.log(result.error);
      // Message sent successfully
      if (result?.error?.data === 'Message sent successfully') {
        setForm({
          fullName: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
        Swal.fire({
          icon: 'success',
          title: 'Ugurlu əməliyyat',
          text: 'Mesajiniz ugurla gonderildi',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Xəta',
          text: result?.error?.data,
        });
      }
    }
  }, [result.isError]);

  return (
    <Layout active='contact'>
      <Helmet>
        <title>Əlaqə</title>
      </Helmet>
      <h1 className='text-white title mb-5'>Bizimlə Əlaqə Qur</h1>

      <div className='row'>
        <div className='col-lg-6'>
          <h2 className='text-white' style={{ fontSize: '64px', fontWeight: 700 }}>
            Fikirlərini Bizimlə <span className='text-warning'>Bölüş!</span>
          </h2>

          <p className='text-white'>
            Layihəmizlə bağlı hər hansı çətinliyi və ya təklifi rahatlıqla bu səhifə vasitəsilə bizə
            çatdıra bilərsən. Lazımi məlumatları da əlavə etməyi unutma ki, ehtiyyac olarsa geri
            əlaqə qura bilək.
          </p>
        </div>
        <div className='col-lg-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <FormControl fullWidth>
                <TextField
                  id='outlined-basic'
                  label='Ad və Soyad'
                  variant='outlined'
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                />
              </FormControl>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='mb-3'>
                  <FormControl fullWidth>
                    <TextField
                      id='outlined-basic'
                      label='Telefon'
                      variant='outlined'
                      required
                      value={form.phoneNumber}
                      onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                    />
                  </FormControl>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='mb-3'>
                  <FormControl fullWidth>
                    <TextField
                      id='outlined-basic'
                      label='E-mail'
                      variant='outlined'
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <FormControl fullWidth>
                <TextField
                  id='outlined-multiline-static'
                  label='Mesaj'
                  multiline
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </FormControl>
            </div>
            <div className='mb-3'>
              <Button variant='contained' type='submit' fullWidth color='warning'>
                Bölüş
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
