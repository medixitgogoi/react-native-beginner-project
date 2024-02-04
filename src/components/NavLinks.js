import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Dollar from 'react-native-vector-icons/dist/AntDesign';

const DATA = [
    {
        id: 1,
        title: 'Home',
        iconName: 'mail',
    },
    {
        id: 2,
        title: 'Attendance history',
        iconName: 'link',
    },
    {
        id: 3,
        title: 'About us',
        iconName: 'totop',
    },
    {
        id: 4,
        title: 'Home',
        iconName: 'mail',
    },
    {
        id: 5,
        title: 'Attendance history',
        iconName: 'link',
    },
    {
        id: 6,
        title: 'About us',
        iconName: 'totop',
    },
    {
        id: 7,
        title: 'Home',
        iconName: 'mail',
    },
    {
        id: 8,
        title: 'Attendance history',
        iconName: 'link',
    },
    {
        id: 9,
        title: 'About us',
        iconName: 'totop',
    },
    {
        id: 10,
        title: 'Home',
        iconName: 'mail',
    },
    {
        id: 11,
        title: 'Attendance history',
        iconName: 'link',
    },
    {
        id: 12,
        title: 'About us',
        iconName: 'totop',
    },
    {
        id: 13,
        title: 'Services',
        iconName: 'sharealt',
        hasDropdown: true,
        dropDownIconName: "downcircle",
    },
];

const Item = ({ title, name, hasDropdown, dropDownIconName }) => {

    const [isOpen, setIsOpen] = useState(true);

    const pressHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <View>
            <View style={{ padding: 13, margin: 3, flexDirection: "row", alignItems: "center", width: "100%", }}>
                <View>
                    <Dollar name={name} style={{ color: "white", backgroundColor: "#2ea3c7", padding: 8, borderRadius: 100, fontSize: 15 }} />
                </View>
                <View>
                    <Text style={{ color: "black", textAlign: "center", fontWeight: '700', fontSize: 15, marginLeft: 8, }}>{title}</Text>
                </View>
                {hasDropdown && (
                    <TouchableOpacity onPress={pressHandler}>
                        <Dollar name={dropDownIconName} style={{ color: "black", padding: 8, borderRadius: 100, fontSize: 17 }} />
                    </TouchableOpacity>
                )}
            </View>
                {/* {isOpen && (
                    <View>
                        <Text style={{ color: "black" }}>Website Development</Text>
                        <Text style={{ color: "black" }}>SEO</Text>
                        <Text style={{ color: "black" }}>Digital Marketing</Text>
                    </View>
                )} */}
        </View>
    )
}

const NavLinks = () => {

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} name={item.iconName} hasDropdown={item.hasDropdown} dropDownIconName={item.dropDownIconName} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default NavLinks

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
        // backgroundColor: "red",
    }
})