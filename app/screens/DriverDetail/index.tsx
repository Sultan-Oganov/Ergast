import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useMemo} from 'react';
import {View, Text, Linking} from 'react-native';
import {RootStackParamList, STACK_LIST} from '../../modules/navigation/types';
import {getStyle} from './styles';

type DriverDetailProps = NativeStackScreenProps<
  RootStackParamList,
  STACK_LIST.DRIVER_DETAIL
>;

export const DriverDetail: FC<DriverDetailProps> = ({route: {params}}) => {
  const styles = useMemo(() => getStyle(), []);
  const {givenName, familyName, url, nationality, dateOfBirth} = params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Имя: ${givenName} ${familyName}`}</Text>
      <Text style={styles.text}>{`Дата рождения: ${dateOfBirth}`}</Text>
      <Text style={styles.text}>{`Национальность: ${nationality}`}</Text>
      <Text
        style={[styles.text, styles.link]}
        onPress={() => Linking.openURL(url)}>
        {'Подробнее...'}
      </Text>
    </View>
  );
};
