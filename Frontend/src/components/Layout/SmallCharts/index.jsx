import AverageSessionLenght from "../../Charts/AverageSessionLenght"
import Score from "../../Charts/Score";
import Performance from "../../Charts/Performance";
import "./index.scss";

const SmallCharts = () => {

    return (
        <div className="smallCharts">
            <AverageSessionLenght />
            <Performance />
            <Score />
        </div>
    )
}

export default SmallCharts;