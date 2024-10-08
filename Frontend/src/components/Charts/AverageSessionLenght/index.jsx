import { useData } from '../../../utils/hooks/UseDataContext';
import {AverageLenghtTooltip, CustomCursor, CustomActiveDot } from '../CustomToolkits/AverageLenghtToolkits';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./index.scss";

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const AverageSessionLength = () => {

    const { userAverageSessions, isLoading, isError } = useData();

    const formatDay = (day) => dayLabels[day - 1];

    return (
        <div className='averageChart'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userAverageSessions && (
                <>
                    <ResponsiveContainer>
                        <h2 className='averageTitle'>Durée moyenne des sessions</h2>
                        <LineChart data={userAverageSessions.sessions}>
                            <XAxis dataKey="day" tickFormatter={formatDay} stroke="#fff" axisLine={false} tickLine={false} />
                            <YAxis dataKey="sessionLength" axisLine={false} tick={false} />
                            <Tooltip content={<AverageLenghtTooltip />} cursor={<CustomCursor />} />
                            <Line type="natural" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} activeDot={<CustomActiveDot />} />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
};

export default AverageSessionLength;