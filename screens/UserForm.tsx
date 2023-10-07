import React, {useState} from 'react'
import {SafeAreaView , Text, View , StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as FileSystem from 'expo-file-system'

const UserForm = () => {
    const filePath = `${FileSystem.documentDirectory}/database.json`;
    const [userName , setUserName] =  useState('');
    const [password , setPassword] =  useState('');
    type User = {
        userId : number,
        userName : string,
        password : string
    }
    
    const saveUser = async() => {
        try {

            if (!userName.trim() && ! password.trim()) {
                Alert.alert('le nom et / ou le mot de passe ne peut etre vide');
                return;
            }
            const pathInfo = await FileSystem.getInfoAsync(filePath);
            if(!pathInfo.exists){
                const initialData = {
                    users : [
                        {
                            userId : 1,
                            userName : userName,
                            password : password,
                            
                        }
                    ],
                    tasks : []
                };
                const initialDataJson = JSON.stringify(initialData);
                await FileSystem.writeAsStringAsync(filePath , initialDataJson);
                console.log('bonkour');
            }else{
                console.log('bonjour');
                
                let jsonData = await FileSystem.readAsStringAsync(filePath);
                let parseData = JSON.parse(jsonData);
                const existingUser = parseData.users.find((user : User) =>(user.userName.toLocaleLowerCase() === userName.toLocaleLowerCase()));
                if (!existingUser) {
                    const newUser = {
                        userId : parseData.users.length + 1,
                        userName : userName,
                        password : password
                    }
                    parseData.users.push(newUser);
                    await FileSystem.writeAsStringAsync(filePath , JSON.stringify(parseData));
                    jsonData = await FileSystem.readAsStringAsync(filePath);
                    parseData = JSON.parse(jsonData);
                    console.log(parseData)
                    setPassword('');
                    setUserName('');
                }
                else{
                    Alert.alert('cet utilisateur existe déjà!');
                    return;
                }
            }
        } catch (error) {
            console.log("une erreur s'est produite pendant la lecture : " , error);
        }
    }

       return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
            <TextInput style={styles.text}  label="Entrer le nom de l'utilisateur" mode='outlined' value={userName} onChangeText={userName => setUserName(userName)}></TextInput>
            <TextInput style={styles.text}  label="Entrer le mdp de l'utilisateur" mode='outlined' value={password} onChangeText={password => setPassword(password)}></TextInput>
            </View>
            <TouchableHighlight onPress={saveUser} style={styles.button}><Text style={{fontStyle:'normal' , fontSize:17, color:'#ffffff'}}>Enregistrer l'utilisateur</Text></TouchableHighlight>
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