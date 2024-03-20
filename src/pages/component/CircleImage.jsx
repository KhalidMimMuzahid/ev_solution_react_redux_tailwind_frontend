/* eslint-disable react/prop-types */

const CircleImage = ({ imgSrc, review }) => {
  return (
    <>
      <div className="flex w-full gap-2 items-center ">
        <img
          src={imgSrc}
          alt="brand image"
          className="w-10 h-auto rounded-full"
        />
        <span>{review}</span>
      </div>
    </>
  );
};

export default CircleImage;
