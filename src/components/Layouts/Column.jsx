const Column = ({ xl, lg, md, sm, children }) => {
  let columnClasses = "px-4"; // Default to full width

  if (xl) {
    columnClasses += ` xl:w-${xl}/12`;
  }
  if (lg) {
    columnClasses += ` lg:w-${lg}/12`;
  }
  if (md) {
    columnClasses += ` md:w-${md}/12`;
  }
  if (sm) {
    columnClasses += ` sm:w-${sm}/12`;
  }

  return <div className={`${columnClasses}`}>{children}</div>;
};

export default Column;
