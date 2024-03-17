import { useGetMenuQuery } from "../../app/services/appApi/appApi";

const Navbar = () => {
  const { data, isError, isLoading } = useGetMenuQuery();
  console.log({ data });
  return <div>Navbar</div>;
};

export default Navbar;
