import { useState } from 'react'
import React from 'react'
import { TextInput, IconButton } from 'react-native-paper'
import { View , Text , StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import DropDownPicker from 'react-native-dropdown-picker'


const FormScreen = () => {
    const[task , setTask] = useState ('');
    const[selectedDate , setSelectedDate] = useState<string | undefined> ('');
    const [selectedUser , setSelectedUser] = useState(null)
    const [selectedValue , setSelectedValue] = useState(null)
    

    const HandleIconButton = () => {
        DateTimePickerAndroid.open({
            mode: 'date',
            value:new Date(),
            minimumDate:new Date(),
            negativeButton:{textColor:'grey'},
            onChange: (event, date) => {
                if (event.type =='set' && date) {
                    setSelectedDate(date.toLocaleDateString());
                } 
            },
        })
        
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <TextInput style={styles.text}  label='Entrer la tache' mode='outlined' right value={task} onChangeText={task => setTask(task)}></TextInput>
                <View style={styles.calendar}>
                    <TextInput style={styles.text}  label='Choisissez la dealine' value={selectedDate} editable={false}   onPressIn={HandleIconButton} mode='outlined'></TextInput>
                    <IconButton style={styles.icon} mode='contained' iconColor='#ffffff' onPress={HandleIconButton} icon='calendar-month-outline'></IconButton>
                </View>
            </View>
                <TouchableHighlight style={styles.button} onPress={()=>console.log('bouton pressé!')}><Text style={{fontStyle:'normal' , fontSize:17, color:'#ffffff'}}>Enregistrer la tache</Text></TouchableHighlight>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    calendar:{
        flexDirection:'row'
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
    icon:{
        height:50,
        width:50,
        borderRadius:15,
        backgroundColor:'#052136',
    }
})

export default FormScreen;