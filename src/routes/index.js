import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import { StackActions } from '@react-navigation/native';

const stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <stack.Navigator>
            <stack.Screen
            name="Welcome"
            component={Welcome}
            options= {{ headerShown: false}}
            /> 
            
            <stack.Screen
            name="SignIn"
            component={SignIn}
            options= {{ headerShown: false}}
            />
        </stack.Navigator>
    )
}
