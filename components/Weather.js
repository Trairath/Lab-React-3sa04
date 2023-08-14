import React, { useState , useEffect } from 'react';
import { ImageBackground, Text , StyleSheet} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        country: 'name',
        main: 'main',
        description: 'description',
        temp: 0,
        }) 
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=2f3db196652616fac189c3c87a00d6d1`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        country: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text>zipCode</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
        
    );
   }

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        height: '190%'
    }
})