import React from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';

export default function Forecast(props) {

    
    return (
        <View style={styles.textView}>
            <View style={styles.locat}>
                <Text style={styles.descriptionText}>country name is</Text>
                <Text style={styles.txtCountry}>{props.country}</Text> 
            </View >
            <View style={styles.locat}>
            <Text style={styles.descriptionText}>pressure is</Text>
                <Text style={styles.txtCountry}>{props.pressure}</Text>
            </View>
            
            <Text style={styles.tempText}>{props.temp} °C</Text>
            <View style={styles.weaters}>
                <Text style={styles.mainText}>{props.main}</Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
            </View >
        </View >
    );
}
const styles = StyleSheet.create({
    textView: {
        backgroundColor: 'rgba(100, 100, 100, 0.2)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: '60%',
    },
    locat: {
        height: '15%',
        backgroundColor: 'rgba(100, 100, 100, 0.1)',
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    txtCountry : {
        fontSize: 48,
        color: 'white',

    },
    tempText:{
        backgroundColor: '#92a8d1',
        width: '25%',
        paddingBottom: 10,
        fontSize: 72,
        color: 'white',
        borderRadius: 15,
    },
    weaters: {
        backgroundColor: '#92a8d1',
        width: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderRadius: 15,
    },
    mainText:{
        fontSize: 30,
        color: 'white',
    },
    descriptionText:{
        color: 'white',
    },

});