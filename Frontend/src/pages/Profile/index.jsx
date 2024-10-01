import { useParams } from "react-router-dom";
import { DataProvider } from "../../utils/DataContext";
import HNavBar from "../../components/NavBar/HNavBar";
import VNavBar from "../../components/NavBar/VNavBar";
import Intro from "../../components/Intro";
import DailyActivity from "../../components/Charts/DailyActivity";
import AverageSessionLenght from "../../components/Charts/AverageSessionLenght";
import Performance from "../../components/Charts/Performance";
import Score from "../../components/Charts/Score";
import UserCard from "../../components/CardsKeyData/UserCard";
import "./index.scss";

const Profile = () => {

    const { id } = useParams();   

    return (
        
        <DataProvider userId={parseInt(id, 10)}>
            <HNavBar />
            <div className="userPage">
                <VNavBar />
                <div className="userData">
                    <Intro />
                    <div className="userInfos">
                        <div className="userCharts">
                            <DailyActivity />
                            <div className="smallCharts">
                                <AverageSessionLenght />
                                <Performance />
                                <Score />
                            </div>
                        </div>
                        <UserCard />
                    </div>            
                </div>
            </div>                                  
        </DataProvider>
    )
}

export default Profile;




