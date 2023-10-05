import React,  {useState } from 'react'
import { View, TouchableHighlight , Text , StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '../App';


export type HomeScreenProps ={
    navigation : StackNavigationProp<RootParamList,'Home'>;
}


export const PlusButton : React.FC<HomeScreenProps> = ({navigation}) =>{
    const [showButton , setShowButton] = useState(false);
    
    const IsVisible = () => {
        setShowButton(!showButton);
    }
    const HandleFormScreen = () => {
        navigation.navigate('Form');
        setShowButton(!showButton);
    }
    const HandleUserScreen = () => {
        navigation.navigate('User');
        setShowButton(!showButton);
    }
    return (
        <View>
                {showButton && (
                    <Animatable.View animation='slideInUp' duration={300}>
                        <TouchableHighlight activeOpacity={1}>
                            <IconButton style={[styles.iconbutton, {top: height * 0.57}]}  iconColor='#ffffff' icon='text-box-plus-outline' onPress={HandleFormScreen}></IconButton>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <IconButton style={[styles.iconbutton, {top: height * 0.565}]}  iconColor='#ffffff' icon='account-plus-outline' onPress={HandleUserScreen}></IconButton>
                        </TouchableHighlight>
                    </Animatable.View>
                )}
                <TouchableHighlight style={styles.button}  onPress={IsVisible}><Text style={{fontSize:35 , color:'#ffffff',}} >+</Text></TouchableHighlight>
            </View>
    )
}

const {width , height} = Dimensions.get('window')

const styles = StyleSheet.create({
    Text :{
        color:'#f00551'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'#f00551',
        top: height * 0.75,  
        left: width * 0.8,
        position : 'absolute'
        /*top:520,
        left:280,*/
        
    },
    iconbutton:{
        height:50,
        width:50,
        borderRadius:30,  
        left: width * 0.8,
        borderColor:'black',
        backgroundColor:'#052136',
        borderWidth:0.5,
    },
})