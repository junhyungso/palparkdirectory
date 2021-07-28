import useHttp from "../hooks/useHttp";
import BusinessInfo from "../components/BusinessInfo";

const Restaurants = (props) => {
  const businessData = useHttp("Restaurant");

  return (
    <>
      <ul>
        {businessData.map((bus) => (
          <BusinessInfo key={bus.address} bus={bus} />
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
