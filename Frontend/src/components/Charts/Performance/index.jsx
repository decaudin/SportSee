import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useData } from '../../../utils/hooks/UseDataContext';
import { customedLabels, formatPerformanceData } from '../CustomToolkits/PerformanceToolkits';
import "./index.scss";

const Performance = () => {

    const { userPerformance, isLoading, isError } = useData();

    return (
        <div className='performance'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userPerformance && (
                <ResponsiveContainer>
                    <RadarChart data={formatPerformanceData(userPerformance)}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis dataKey="subject" stroke="#fff" tickLine={false} tick={(props) => customedLabels(props)} />
                        <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.70)" />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Performance;

