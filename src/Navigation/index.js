import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../Screens/Welcome';
import RegionListScreen from '../Screens/RegionList';
import CustomersByRegionScreen from '../Screens/Regions';
import New from '../Features/Customer/New';
import EditCustomer from '../Features/Customer/Edit';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="regionList" component={RegionListScreen} title="List of Regions"/>
        <Stack.Screen name="List" component={CustomersByRegionScreen} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Edit" component={EditCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;