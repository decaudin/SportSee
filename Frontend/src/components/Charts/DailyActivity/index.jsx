import { useData } from "../../../utils/hooks/UseDataContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import DailyActivityTooltip from '../CustomTooltips/DailyActivityTooltip';
import "./index.scss";

const DailyActivity = () => {

    const { userActivity, isLoading, isError } = useData();

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
                    <ResponsiveContainer className="barContainer">                    
                        <BarChart data={userActivity.sessions} barGap={10}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                            <XAxis dataKey="day" tickLine={false}/>
                            <YAxis orientation="right" tickLine={false}/>
                            <Tooltip content={<DailyActivityTooltip />} />
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
