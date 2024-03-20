/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import CircleImage from "./CircleImage";

const Component = () => {
  const componentName = useLoaderData();

  return (
    <div className="relative h-full bg-white pb-[0px] pt-[20px] dark:bg-dark lg:pt-[30px]">
      <div className="container">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              {/* Welcome to our{" "} */}
              <h1 className="mb-5 text-5xl font-bold !leading-[1.208]  text-black sm:text-[48px] lg:text-[46px] xl:text-7xl">
                {componentName}
              </h1>
              <p className="mb-4 max-w-[480px] text-base text-body-color dark:text-dark-6">
                We provide all of digital products and services all over the
                world.
              </p>
              <div className="clients pt-8">
                <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                  Customer review
                  <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                </h6>

                <div className="flex flex-col gap-3 items-center ">
                  <CircleImage
                    imgSrc="https://i.ibb.co/Fnw0Ckh/fashion-photography.jpg"
                    review="Evs provide best services"
                  />
                  <CircleImage
                    imgSrc="https://i.ibb.co/Fnw0Ckh/fashion-photography.jpg"
                    review="Evs is awesome"
                  />
                  <CircleImage
                    imgSrc="https://i.ibb.co/Fnw0Ckh/fashion-photography.jpg"
                    review="Evs is fantastic"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full hidden lg:block px-4 lg:w-6/12">
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
