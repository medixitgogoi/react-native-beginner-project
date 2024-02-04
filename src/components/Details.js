import { StyleSheet, FlatList, View } from 'react-native';
import DetailCard from './DetailCard';

const DATA = [
    {
        id: 1,
        title: 'Total attendance',
        iconName: 'file1',
    },
    {
        id: 2,
        title: `Today's task`,
        iconName: 'antdesign',
    },
    {
        id: 3,
        title: 'Mark attendance',
        iconName: 'printer',
    },
    {
        id: 4,
        title: 'Attendance history',
        iconName: 'sharealt',
    },
];

const Details = () => {
    return (
        <View>
            <FlatList
                // style={{ flex: 1 }}
                data={DATA}
                renderItem={({ item }) => <DetailCard title={item.title} name={item.iconName} />}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default Details