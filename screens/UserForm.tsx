import React, { Component, useState } from 'react'
import {SafeAreaView , Text, View , StyleSheet, TouchableHighlight} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as data from '../data/database.json'

const UserForm = () => {

    /*const word = data.users.map((user) => {
        return[user.userId , user.userName , user.firstUserName];
    } );*/
    const word = require("C:\Users\Ronald\secondProject\data\database.json");
    const [userName , setUserName] =  useState('');
    const [firstUserName , setFirstUserName] =  useState('');


    //const saveUser = async() => {
        /*try {
            const fileData = await readFile(filePath , 'utf-8');
            const jsonData = JSON.parse(fileData);

            const newUser = {
                userId : jsonData.users.length > 0 ? jsonData.users[jsonData.users.length - 1].userId + 1 : 1,
                userName : userName,
                firstUserName : firstUserName,
            }
            jsonData.users.push(newUser);
            const updated = JSON.stringify(jsonData , null , 2);
            await writeFile(filePath , fileData , 'utf-8');
            console.log('enregistrement réussi');
            setUserName('');
            setFirstUserName('');
        } catch (error) {
            console.log("l'erreur produite est " + error)
        }*/
      

    //}
    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
            <TextInput style={styles.text}  label="Entrer le nom de l'utilisateur" mode='outlined' value={userName} onChangeText={userName => setUserName(userName)}></TextInput>
            <TextInput style={styles.text}  label="Entrer le prenom de l'utilisateur" mode='outlined' value={firstUserName} onChangeText={firstUserName => setFirstUserName(firstUserName)}></TextInput>
            </View>
            <TouchableHighlight onPress={() =>console.log(word)} style={styles.button}><Text style={{fontStyle:'normal' , fontSize:17, color:'#ffffff'}}>Enregistrer l'utilisateur</Text></TouchableHighlight>
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