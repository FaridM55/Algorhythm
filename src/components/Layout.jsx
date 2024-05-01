import Navbar from './NavBar';

const Layout = ({ children, active }) => {
  return (
    <div className='container mb-5'>
      <Navbar active={active} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
