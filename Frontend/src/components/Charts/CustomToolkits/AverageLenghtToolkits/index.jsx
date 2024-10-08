import PropTypes from "prop-types";
import "./index.scss";

export const AverageLenghtTooltip = ({ active, payload }) => {
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

export const CustomCursor = ({ points }) => {

    const { x } = points[0];

    return (
        <rect x={x} y={0} width="100%" height="263px" fill="#000" opacity={0.0975} />
    );
};

CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number.isRequired,
        })
    )
};

export const CustomActiveDot = (props) => {
    const { cx, cy } = props;
    return (
        <>
            <circle cx={cx} cy={cy} r={13} fill="rgba(255, 255, 255, 0.20)" />
            <circle cx={cx} cy={cy} r={5} fill="#fff" />
        </>
    );
};

CustomActiveDot.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
};
