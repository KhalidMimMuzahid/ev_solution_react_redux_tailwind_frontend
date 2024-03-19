import { useGetMenuQuery } from "../../app/services/appApi/appApi";
import EachMobile from "./eachMobile/EachMobile";

export const Mobile = () => {
  const {
    data: { MobileList },
  } = useGetMenuQuery();

  console.log({ MobileList });
  let keys = [];
  if (Object.keys(MobileList).length > 0) {
    keys = Object.keys(MobileList);
  }
  return (
    <div
      className=""
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
        gap: "20px",
      }}
    >
      {keys?.map((key, index) => (
        <EachMobile key={index} mobile={MobileList[key]} />
      ))}
    </div>
  );
};
