import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'crusade',
      imageUrl:
        'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/star-purple_ds4wta.jpg',
    },
    {
      id: 2,
      title: 'hunting man',
      imageUrl:
        'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/wise-skull-pink_egwtte.jpg',
    },
    {
      id: 3,
      title: 'witching hour',
      imageUrl:
        'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163314/witching-hour-purple_velrj9.jpg',
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
