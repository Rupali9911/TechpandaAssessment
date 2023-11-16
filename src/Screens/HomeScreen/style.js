import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White, flex: 1
    },
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftHeaderCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    hembarger: {
        height: 20,
        width: 20,
        tintColor: Colors.themeColor
    },
    editButton: {
        borderWidth: 1,
        borderColor: Colors.themeColor,
        padding: 5,
        borderRadius: 5
    },
    themeColor: {
        color: Colors.themeColor
    }
})

export default styles;
