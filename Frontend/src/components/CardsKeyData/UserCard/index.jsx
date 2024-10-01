import { useData } from "../../../utils/hooks/UseDataContext";
import Card from "../Card";
import calories from "../../../assets/cards/calories.svg";
import protein from "../../../assets/cards/protein.svg";
import carbs from "../../../assets/cards/carbs.svg";
import fat from "../../../assets/cards/fat.svg";
import "./index.scss";

const UserCard = () => {

    const { userData, isLoading, isError } = useData();
  
    return (
    <div className="cardsContainer">
        {isLoading && <p>Chargement ...</p>}
        {isError && <p>Une erreur est survenue</p>}
        {userData && (
            <>
                <Card icon={calories} value={`${userData.keyData.calorieCount.toLocaleString('en-US')}kCal`} label="Calories" />
                <Card icon={protein} value={`${userData.keyData.proteinCount.toLocaleString('en-US')}g`} label="Protéines" />
                <Card icon={carbs} value={`${userData.keyData.carbohydrateCount.toLocaleString('en-US')}g`} label="Glucides" />
                <Card icon={fat} value={`${userData.keyData.lipidCount.toLocaleString('en-US')}g`} label="Lipides" />           
            </>      
        )}
    </div>
  );
};

export default UserCard;


