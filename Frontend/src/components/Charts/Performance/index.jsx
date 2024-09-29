import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useData } from '../../../utils/hooks/UseDataContext';
import "./index.scss";

const Performance = () => {

    const { userPerformance, isLoading, isError } = useData();
    
    return (
        <div className='performance'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userPerformance && (
                <ResponsiveContainer width="100%" height={400}>
                <RadarChart outerRadius="80%" data={userPerformance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Performance" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Performance;
