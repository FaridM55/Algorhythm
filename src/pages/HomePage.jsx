import { Helmet } from 'react-helmet-async';
import InfoCard from '../components/InfoCard';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Ana səhifə</title>
      </Helmet>
      <h1 className='text-white title'>AlgoRythm'ə Xoş Gəlmisiniz!</h1>
      <h4 className='text-white fw-bold'>Nə təklif edirik ?</h4>
      <div className='row mt-5'>
        <InfoCard
          title='Sadə İzah'
          description='İstifadəçilər minimal proqramlaşdırma bilikləri ilə rahatlıqla mövzuları analiz edə və
          tətbiq edə biləcəklər.
          <br/>
          <br/>
          Mövzuların xronoloji ardıcıllığı
          məqsədli şəkildə dizayn
          edilərək istifadəçiləri
          qarşılaşacağı qaranlıq
          məqamlardan sığortalayır!'
        />
        <InfoCard
          title='Praktiki Təhsil'
          description='İstifadəçilər öyrəndikləri 
          mövzuları tətbiq etmə şansı 
          əldə edərək biliklərini 
          möhkəmləndirə və yeni 
          mövzulara keçid edə bilərlər. 
          <br />
          <br />
          Hər mövzu üçün təmin <br />
          olunmuş müxtəlif təsvirə malik 
          tapşırıqlar istifadəçilərə fərqli 
          tətbiq sahələri vəd edir.
        />
        <InfoCard
          title='Diskussiya'
          description='İstifadəçilər icma panelindən 
          istifadə edərək mövzular və 
          ya tapşırıqlar haqqında sual
          verə, mövcud sualları 
          cavablandıra bilərlər.
          <br />
          <br />
          İnteraktiv öyrənmə üsulu ilə,
          istifadəçilər asanlıqla çətinlik
          çəkdiləri məqamlarda digər istifadəçilərdən 
          yardım ala bilirlər.'
        />
      </div>
    </Layout>
  );
};

export default HomePage;
