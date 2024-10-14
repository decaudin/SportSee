import { useData } from '../../../utils/hooks/UseDataContext';
import { AverageLenghtTooltip, CustomCursor, CustomActiveDot } from '../CustomToolkits/AverageLenghtToolkits';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./index.scss";

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const AverageSessionLength = () => {

    const { userAverageSessions, isLoading, isError } = useData();

    const formatDay = (day) => dayLabels[day - 1];

    return (
        <div className="averageChart">
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userAverageSessions && (
                <>
                    <ResponsiveContainer className="averageResponsive">
                        <h2 className="averageTitle">Durée moyenne des sessions</h2>
                        <LineChart margin={{ bottom: 50, top: 50, left: -45, right: 15}} data={userAverageSessions.sessions}>
                            <defs>
                                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
                                    <stop offset="0%" stopColor="white" />
                                    <stop offset="81%" stopColor="white" stopOpacity="0.4" />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" tickFormatter={formatDay} stroke="#fff" opacity={0.5} axisLine={false} tickLine={false} tick={{ dy: 40 }} />
                            <YAxis dataKey="sessionLength" axisLine={false} tick={false} />
                            <Tooltip content={<AverageLenghtTooltip />} cursor={<CustomCursor />} />
                            <Line type="natural" dataKey="sessionLength" stroke="url(#gradient)" strokeWidth={2} dot={false} activeDot={<CustomActiveDot />} />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
};

export default AverageSessionLength;