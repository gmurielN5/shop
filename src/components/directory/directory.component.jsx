import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'crusade',
    imageurl:
      'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/star-purple_ds4wta.jpg',
    route: 'shop/crusade',
  },
  {
    id: 2,
    title: 'hunting',
    imageurl:
      'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/wise-skull-pink_egwtte.jpg',
    route: 'shop/hunting',
  },
  {
    id: 3,
    title: 'witching',
    imageurl:
      'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163314/witching-hour-purple_velrj9.jpg',
    route: 'shop/witching',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
