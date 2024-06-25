const Column = ({ xl, lg, md, sm, children }) => {
  let columnClasses = "";

  if (xl) {
    columnClasses = `w-${xl}/12`;
  } else if (lg) {
    columnClasses = `w-${lg}/12 lg:w-${lg}/12`;
  } else if (md) {
    columnClasses = `w-${md}/12 md:w-${md}/12`;
  } else if (sm) {
    columnClasses = `w-${sm}/12 sm:w-${sm}/12`;
  } else {
    columnClasses = "w-full";
  }

  return <div className={`px-4 ${columnClasses}`}>{children}</div>;
};

export default Column;
