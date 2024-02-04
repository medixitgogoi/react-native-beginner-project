import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Startdateicon from 'react-native-vector-icons/dist/AntDesign';

const TaskCard = () => {
    return (
        <View style={styles.taskCardContainer}>
            <View style={{ flex: 1, backgroundColor: "#5f95a1", padding: 10, alignItems: "center", justifyContent: "center", }}>
                <Startdateicon name="check" style={{ fontSize: 17, padding: 3, borderRadius: 100, borderWidth: 1, borderColor: 'white' }} />
            </View>
            <View style={{ flex: 4, backgroundColor: "#79c7d9", padding: 8, flexDirection: "column", justifyContent: "space-between", }}>
                <View>
                    <Text style={{ color: "black" }}>Complete repairs and new equipment installation complete</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: "black", textDecorationLine: "underline" }}>View tasks</Text>
                    <TouchableOpacity style={{ backgroundColor: "#185e70", padding: 7, borderRadius: 5, }}>
                        <Text style={{ color: "white" }}>Set Task Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TaskCard;

const styles = StyleSheet.create({
    taskCardContainer: {
        marginHorizontal: 5,
        marginVertical: 6,
        flexDirection: "row",
        borderRadius: 10, //border radius not working
        
    }
})