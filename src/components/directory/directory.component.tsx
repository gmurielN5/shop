import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories = [
  {
    id: 1,
    title: 'crusade',
    imageUrl:
      'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/star-purple_ds4wta.jpg',
    route: 'shop/crusade',
  },
  {
    id: 2,
    title: 'hunting',
    imageUrl:
      'https://res.cloudinary.com/dqkli4cq0/image/upload/v1714163315/wise-skull-pink_egwtte.jpg',
    route: 'shop/hunting',
  },
  {
    id: 3,
    title: 'witching',
    imageUrl:
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
