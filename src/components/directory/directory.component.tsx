import { Key, useState, useEffect, useRef } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import {
  DirectoryContainer,
  DirectoryWrapper,
  SlideDots,
  SlideDot,
} from './directory.styles';

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
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === categories.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <DirectoryContainer>
      <DirectoryWrapper $index={index}>
        {categories.map((category, index) => (
          <DirectoryItem key={index} category={category} />
        ))}
      </DirectoryWrapper>
      <SlideDots>
        {categories.map((_, idx) => (
          <SlideDot
            key={idx}
            $active={index === idx ? true : false}
            onClick={() => {
              setIndex(idx);
            }}
          ></SlideDot>
        ))}
      </SlideDots>
    </DirectoryContainer>
  );
};

export default Directory;
