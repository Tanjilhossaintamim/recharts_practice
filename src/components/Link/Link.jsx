import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="py-2 px-5 hover:bg-orange-800 duration-300">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
