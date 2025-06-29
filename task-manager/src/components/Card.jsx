import PropTypes from 'prop-types';

const Card = ({ children, className = '', id }) => (
  <div
    id={id}
    className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-shadow duration-300 max-w-md w-full ${className}`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Card;