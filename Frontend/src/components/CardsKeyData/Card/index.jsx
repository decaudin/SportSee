import PropTypes from "prop-types";
import "./index.scss";

const Card = ({ icon, value, label }) => {
  
    return (
    <div className="cardContainer">
      <img src={icon} alt={label} />
      <div className="infoContainer">
        <h3 className="cardTitle">{value}</h3>
        <p className="cardText">{label}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
    icon: PropTypes.string.isRequired,  
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

export default Card;
