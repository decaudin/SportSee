import { useData } from "../../../utils/hooks/UseDataContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import DailyActivityTooltip from '../CustomToolkits/DailyActivityTooltip';
import "./index.scss";

const DailyActivity = () => {

    const { userActivity, isLoading, isError } = useData();

    const formatDay = (day, index) => {
        return index + 1;
    };

    return (

        <div className='dailyActivity'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userActivity && (
                <>
                    <div className="dailyHeader">
                        <h2>Activité quotidienne</h2>
                        <ul>
                            <li>Poids (kg)</li>
                            <li className="red">Calories brulées (kCal)</li>
                        </ul>
                    </div>                                    
                    <ResponsiveContainer>                                             
                        <BarChart data={userActivity.sessions} barGap={10}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="day" tickFormatter={(day, index) => formatDay(day, index)} tickLine={false} stroke="#DEDEDE" tick={{ fill: "#9B9EAC" }} />
                            <YAxis orientation="right" tickLine={false} tick={{ fill: "#9B9EAC" }} axisLine={false}/>
                            <Tooltip content={<DailyActivityTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.50" }}/>
                            <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                            <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            )}            
        </div>
    )
}

export default DailyActivity;
