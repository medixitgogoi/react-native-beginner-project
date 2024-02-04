import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Startdateicon from 'react-native-vector-icons/dist/Entypo';
import Sidebar from "./Sidebar";

const Header = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.headerContainer}>

            <TouchableOpacity style={{ paddingHorizontal: 10, alignItems: "flex-start" }} onPress={toggleModal}>
                <Startdateicon name="menu" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.logo}>WigConstruction</Text>

            <Sidebar isModalVisible={isModalVisible} toggleModal={toggleModal} />

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#1e7e96",
        padding: 15,
        flexDirection: "row",
        alignItems: 'center',
    },
    icon: {
        fontSize: 22,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 100,
        color: "black",

    },
    logo: {
        color: "white",
        fontSize: 20,
        fontWeight: '700'
    }
});