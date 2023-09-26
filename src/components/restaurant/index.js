
import { StyleSheet, Dimensions } from 'react-native';

const screenWith = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
        gap: 10,
    },

    // parentScrollView: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     backgroundColor: '#FFF',
    //     borderRadius: 20,
    //     top: 265,
    // },

    imageTopo: {
        width: screenWith,
        height: 150,
        resizeMode: 'cover',
    },

    contentDescription: {
        width: 320,
        marginTop: 40,
    },

    contentTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: "#333",
    },

    contentText: {
        width: 320,
        fontSize: 14,
        fontWeight: '400',
        color: "#808080",
        lineHeight: 22,
    }

});
