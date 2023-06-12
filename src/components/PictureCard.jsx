export const PictureCard = ({ children, id }) => {
  return (
    <div
      className={`rounded-lg border-4 border-white cursor-pointer w-40 md:w-48 overflow-hidden hover:z-10 origin-center ${
        id === 3 ? "rotate-12" : ""
      }`}
    >
      {children}
    </div>
  );
};
