import { StyleSheet, Text, View } from 'react-native';
import Startdateicon from 'react-native-vector-icons/dist/AntDesign';

const DetailCard = ({ title, name }) => {
    return (
        <View style={styles.detailCardContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon}>
                <Startdateicon name={name} style={{ fontSize: 20 }} />
            </View>
        </View>
    )
}

export default DetailCard;

const styles = StyleSheet.create({
    detailCardContainer: {
        backgroundColor: "#185e70",
        paddingHorizontal: 20,
        paddingVertical: 25,
        margin: 5,
        borderRadius: 10,
        flex: 1,
        height: 120,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 15,
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        color: "white",
    },
    icon: {
        backgroundColor: "#21879e",
        padding: 8,
        borderRadius: 100,
        elevation: 15,


    }
})