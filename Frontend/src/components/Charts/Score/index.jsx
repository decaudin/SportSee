import { useData } from "../../../utils/hooks/UseDataContext";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./index.scss";

const Score = () => {

    const { userData, isLoading, isError } = useData();

    const percentage = userData ? userData.todayScore * 100 : 0;

    return (
        <div className="score">
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userData && (
                <>
                    <h2 className="scoreTitle">Score</h2>
                    <div className="scoreChartContainer">                  
                        <ResponsiveContainer>
                            <RadialBarChart
                                innerRadius="70%"
                                outerRadius="80%"
                                barSize={10}
                                data={[{ name: "score", value: userData.todayScore, fill: "#ff0000", cornerRadius:"10" }]}
                                startAngle={90} 
                                endAngle={450}
                            >
                                <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                                <RadialBar dataKey="value" />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <div className="circle">
                            <p className="percentage">{`${percentage}%`}</p>
                            <p>de votre</p>
                            <p>objectif</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Score;

