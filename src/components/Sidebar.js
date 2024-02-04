import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import NavLinks from './NavLinks';

const App = ({ isModalVisible, toggleModal }) => {

    return (
        <View style={{ flex: 1 }}>
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                onBackdropPress={toggleModal}
                style={{ margin: 0 }}
            >
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: "column", alignItems: 'flex-start', backgroundColor: "white", width: "80%" }}>
                    <View style={{ flex: 1, backgroundColor: "#185e70", width: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ color: "white", marginBottom: 10 }}>Logo</Text>
                        <Text style={{ color: "white" }}>Title </Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <NavLinks />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default App;


{/* <TouchableOpacity onPress={toggleModal}>
    <Text>Close Modal</Text>
</TouchableOpacity> */}