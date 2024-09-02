import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },
    shadow: {
        margin: 5,
        elevation: 5, // Increase if needed for more shadow
        backgroundColor: 'white', // Non-transparent background for better shadow visibility
        padding: 15,
        borderRadius: 10, // Rounded corners (optional)
        // Shadow properties for iOS
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    setFlex1: {
        flex: 1
    },
    setFlex2: {
        flex: 2
    },
    setFlex3: {
        flex: 3
    },
    setFlex5: {
        flex: 5
    },
    viewLongPress: {

        textAlign: 'center',
        fontSize: 50,
        borderColor: 'white',
        borderWidth: .8,
        width: "100%",

    },
    setFontMedium: {
        fontSize: 30
        
    },
    text: {
        color:'black' ,
        textAlign: 'center'
    },
    extraSmallSize: {
        fontSize: 20
    },
    smallSize: {
        fontSize: 25
    },
    mediumSize: {
        fontSize: 30
    },

    largeSize: {
        fontSize: 35
    },
    extraLargeSize: {
        fontSize: 40
    }

});