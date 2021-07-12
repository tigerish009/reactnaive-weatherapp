import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";


export default function Weather() {
    return  <View style={styles.container}>
                <Text>{temp}</Text>
            </View>
}


Weather.PropTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})