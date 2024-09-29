import DailyActivity from "../../Charts/DailyActivity";
import Intro from "../../Intro";
import SmallCharts from "../SmallCharts";
import "./index.scss";

const UserData = () => {

    return (
        <div className="userData">
            <Intro />
            <DailyActivity />
            <SmallCharts />
        </div>
        
    )
}

export default UserData;