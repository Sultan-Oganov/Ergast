import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Drivers} from '../../screens';
import {Races} from '../../screens/Races';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Список гонщиков'} component={Drivers} />
      <Tab.Screen name={'Список заездов'} component={Races} />
    </Tab.Navigator>
  );
};
