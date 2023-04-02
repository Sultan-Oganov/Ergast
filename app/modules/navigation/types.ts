import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IDriver} from '../types/drivers';
import {IRace} from '../types/races';

export enum STACK_LIST {
  DRIVERS = 'Drivers',
  DRIVER_DETAIL = 'DriverDetail',
  RACES = 'Races',
  RACE_DETAIL = 'RaceDetail',
}
export type RootStackParamList = {
  [STACK_LIST.DRIVERS]: undefined;
  [STACK_LIST.RACES]: undefined;
  [STACK_LIST.DRIVER_DETAIL]: IDriver;
  [STACK_LIST.RACE_DETAIL]: IRace;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
