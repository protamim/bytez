const CategoryCard = (props) => {

  return (
    <>
      <div className="bg-gray-200 py-6 rounded-xl flex flex-col items-center justify-center gap-4">
        <span className="text-4xl sm:text-6xl">{props?.icon}</span>
        <h4 className="text-lg font-normal text-center sm:text-xl">{props?.title}</h4>
      </div>
    </>
  );
};

export default CategoryCard;
