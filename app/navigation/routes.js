import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import CoversScreen from '../views/CoversScreen';
import TitlesScreen from '../views/TitlesScreen';
import Navigation from './Navigation';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer
            ref={Navigation.navigationRef}
        >
        <Tab.Navigator
            unmountOnBlur
            lazy
            optimizationsEnabled={false}
            tabBarOptions={{
                initialLayout: {
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                },
            }}
        >
            <Tab.Screen
                name="Covers"
                component={CoversScreen}
                />
            <Tab.Screen
                name="Titles" component={TitlesScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;