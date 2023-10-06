import React, {useState} from 'react'
import {SafeAreaView , Text, View , StyleSheet, TouchableHighlight} from 'react-native';
import {TextInput} from 'react-native-paper';

const UserForm = () => {
    
    const [userName , setUserName] =  useState('');
    const [firstUserName , setFirstUserName] =  useState('');

       return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
            <TextInput style={styles.text}  label="Entrer le nom de l'utilisateur" mode='outlined' value={userName} onChangeText={userName => setUserName(userName)}></TextInput>
            <TextInput style={styles.text}  label="Entrer le prenom de l'utilisateur" mode='outlined' value={firstUserName} onChangeText={firstUserName => setFirstUserName(firstUserName)}></TextInput>
            </View>
            <TouchableHighlight onPress={() =>console.log('hello')} style={styles.button}><Text style={{fontStyle:'normal' , fontSize:17, color:'#ffffff'}}>Enregistrer l'utilisateur</Text></TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    screen:{
        width:'100%',
        height:'100%',
        backgroundColor:'#f3fdff',
        
    },
    container :{
        marginTop:50,
        marginHorizontal:20,
        justifyContent:'center',
    },
    button:{
        marginVertical:15,
        alignSelf:'center',
        width:200,
        borderRadius:10,
        backgroundColor:'#f00551',
        height:50,
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        marginBottom:15,
    },


})

export default UserForm;