const CategoryItem = ({ category }) => {
  const { title } = category;
  return (
    <div>
      <h2>{title}</h2>
      <p>shop now</p>
    </div>
  );
};

export default CategoryItem;
