import PropTypes from "prop-types";

const MetricCard = ({ title, color, value, delta }) => {
  let changeIndicator = (
    <span className={`text-${color}-500`}>
      <i className={`fas fa-caret-${delta > 0 ? "up" : "down"}`}></i>
    </span>
  );

  return (
    <div
      className={`bg-gradient-to-b from-${color}-200 to-${color}-100 border-b-4 border-${color}-500 rounded-lg shadow-xl p-5`}
    >
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <div className={`rounded-full p-5 bg-${color}-600`}>
            <i className="fas fa-inbox fa-2x fa-inverse"></i>
          </div>
        </div>
        <div className="flex-1 text-right md:text-center">
          <h2 className="font-bold uppercase text-gray-600">{title}</h2>
          <p className="font-bold text-3xl">
            {value} {delta !== 0 ? changeIndicator : null}
          </p>
        </div>
      </div>
    </div>
  );
};

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
  delta: PropTypes.number,
};

MetricCard.defaultProps = {
  color: "sky",
  delta: 0,
};

export default MetricCard;
