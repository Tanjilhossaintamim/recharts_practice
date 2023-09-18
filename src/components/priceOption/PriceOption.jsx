import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { membershipType, pricePerMonth, features } = option;
  return (
    <div className="text-white bg-blue-800 p-4 rounded-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl">{pricePerMonth}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-3">{membershipType}</h4>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
      <button className="w-full py-2 bg-green-700 my-3 rounded-md hover:bg-green-900 transition-all duration-300">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
