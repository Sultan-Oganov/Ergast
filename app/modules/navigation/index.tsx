import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, STACK_LIST} from './types';
import {Tabs} from './tabs';
import {DriverDetail} from '../../screens';
import {RaceDetail} from '../../screens/RaceDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName={STACK_LIST.DRIVERS}>
      <Stack.Screen
        options={{headerShown: false}}
        component={Tabs}
        name={STACK_LIST.DRIVERS}
      />
      <Stack.Screen
        options={{
          title: 'Инфо',
          headerBackTitle: 'Назад',
        }}
        component={DriverDetail}
        name={STACK_LIST.DRIVER_DETAIL}
      />
      <Stack.Screen
        options={{
          title: 'Инфо',
          headerBackTitle: 'Назад',
        }}
        component={RaceDetail}
        name={STACK_LIST.RACE_DETAIL}
      />
    </Stack.Navigator>
  );
};
