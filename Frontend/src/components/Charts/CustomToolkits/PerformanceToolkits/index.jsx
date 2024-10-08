import { Text } from 'recharts';

const kindTranslation = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
};

export const formatPerformanceData = (performance) => {

    const order = [6, 5, 4, 3, 2, 1];
    const sortedData = performance.data.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));

    return sortedData.map(item => ({
        value: item.value,
        subject: kindTranslation[item.kind]
    }));
};

export const customedLabels = ({ payload, x, y, cx, cy, ...rest }) => {

    const customStyle = {
        fontSize: 12
    };

    return (
        <Text {...rest} verticalAnchor='middle' y={y + (y - cy) / 10} x={x + (x - cx) / 10} style={{ ...rest, ...customStyle }}>
            {payload.value}
        </Text>
    );
}