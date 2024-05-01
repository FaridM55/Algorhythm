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
          title='Diskussiya'
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
      </div>
    </Layout>
  );
};

export default HomePage;
