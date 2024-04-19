import CategoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
