import { StyleSheet, Text, View } from 'react-native';
import Startdateicon from 'react-native-vector-icons/dist/FontAwesome5';
import TaskCard from './TaskCard';

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
    {
        id: 5,
        title: 'Attendance history',
        iconName: 'sharealt',
    },
];

const Tasks = () => {
    return (
        <View>
            <View style={styles.taskContainer}>
                <View style={{ backgroundColor: "white", padding: 7, borderRadius: 100, }}>
                    <Startdateicon name={"sticky-note"} style={{ color: "black", fontSize: 17, }} />
                </View>
                <Text style={{ color: "black", fontSize: 16, fontWeight: '500' }}>Today's assigned tasks</Text>
            </View>
            <View>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
               
            </View>
        </View>
    )
}

export default Tasks;

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: "#79c7d9",
        margin: 5,
        padding: 8,
        flexDirection: "row",
        gap: 7,
        alignItems: "center",
        borderRadius: 5,

    }
})