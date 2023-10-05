import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import UserForm from './screens/UserForm';

const myApp = createStackNavigator();

export type RootParamList = {
  Home:undefined
  Form:undefined
  User:undefined
}

const App = () => {
  return (
    <NavigationContainer>
      <myApp.Navigator initialRouteName='Home'>
        <myApp.Screen name='Home' options={{title:'Liste des taches', headerTintColor:'#FFFFFF', headerTitleAlign:'center', headerStyle:{backgroundColor:'#052136'}}} component={HomeScreen}/>
        <myApp.Screen name='Form' options={{title:'Créer une nouvelle tache', headerTintColor:'#FFFFFF', headerTitleAlign:'center', headerStyle:{backgroundColor:'#052136'}}} component={FormScreen}/>
        <myApp.Screen name='User' options={{title:'Créer un nouvel utilisateur', headerTintColor:'#FFFFFF', headerTitleAlign:'center', headerStyle:{backgroundColor:'#052136'}}} component={UserForm}/>
      </myApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
