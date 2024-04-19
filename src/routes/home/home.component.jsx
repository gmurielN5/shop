import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Shoes',
    },
  ];
  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
