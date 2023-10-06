import React from 'react'
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native'
import { RootParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'
import { PlusButton } from '../components/PlusButton'

export type HomeScreenProps ={
    navigation : StackNavigationProp<RootParamList,'Home'>;
}

const HomeScreen : React.FC<HomeScreenProps> = ({navigation}) => {

   /* const HandleFormScreen = () => {
        navigation.navigate('Form');
    }
    const HandleUserScreen = () => {
        navigation.navigate('User');
    }*/

    return (
        <SafeAreaView style={styles.screen}>
            <PlusButton navigation={navigation}/>
            <StatusBar barStyle='default'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f3fdff',
    },
})

export default HomeScreen;