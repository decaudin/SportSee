import PropTypes from "prop-types";
import "./index.scss";

const AverageLenghtTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
    return (
        <div className="averageTooltip">
            <p >{`${payload[0].value} min`}</p>
        </div>
    );
    }
    return null;
};

AverageLenghtTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired
    })),
};

export default AverageLenghtTooltip;