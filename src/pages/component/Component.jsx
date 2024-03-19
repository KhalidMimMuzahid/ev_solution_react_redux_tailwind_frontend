import { useLoaderData } from "react-router-dom";

const Component = () => {
  const SingleImage = ({ imgSrc, review }) => {
    return (
      <>
        <div className="flex w-full gap-2 items-center ">
          <img src={imgSrc} alt="brand image" className="w-10 rounded-full" />
          <span>{review}</span>
        </div>
      </>
    );
  };
  const componentName = useLoaderData();

  return (
    <div className="relative h-full bg-white pb-[0px] pt-[20px] dark:bg-dark lg:pt-[30px]">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              Welcome to our{" "}
              <h1 className="mb-5 text-4xl font-bold !leading-[1.208]  text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                {componentName}
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                We build smarter software solutions to transform the digital
                world with innovative technology.
              </p>
              <div className="clients pt-16">
                <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                  Customer review
                  <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                </h6>

                <div className="flex flex-col gap-3 items-center ">
                  <SingleImage
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    review="Evs provide best services"
                  />
                  <SingleImage
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    review="Evs is awesome"
                  />
                  <SingleImage
                    imgSrc="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    review="Evs is fantastic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-4 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
