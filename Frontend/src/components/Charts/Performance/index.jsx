import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { useData } from '../../../utils/hooks/UseDataContext';
import "./index.scss";

const Performance = () => {

    const { userPerformance, isLoading, isError } = useData();

    const kindTranslation = {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité'
    };

    const formatPerformanceData = (performance) => {

        const order = [6, 5, 4, 3, 2, 1];
        const sortedData = performance.data.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));

        return sortedData.map(item => ({
            value: item.value,
            subject: kindTranslation[item.kind]
        }));
    };

    return (
        <div className='performance'>
            {isLoading && <p>Chargement ...</p>}
            {isError && <p>Une erreur est survenue</p>}
            {userPerformance && (
                <ResponsiveContainer>
                    <RadarChart outerRadius="80%" data={formatPerformanceData(userPerformance)}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" stroke="#fff" />
                        <Radar name="Performance" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Performance;

