import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <p className="flex items-center">
      <AiFillCheckCircle className="mr-2 bg-blue-800" />
      {feature}
    </p>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
