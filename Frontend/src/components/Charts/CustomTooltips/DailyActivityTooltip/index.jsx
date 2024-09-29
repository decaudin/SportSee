import PropTypes from "prop-types";
import "./index.scss"; 

const DailyActivityTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="dailyTooltip">
                <p className="label">
                    {`${payload[0].value} kg`}
                </p>
                <p className="label">
                    {`${payload[1].value} kcal`}
                </p>
            </div>
        );
    }
    return null;
};

DailyActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number.isRequired
    })),
};

export default DailyActivityTooltip;
