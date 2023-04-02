import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useMemo} from 'react';
import {Text, Linking, ScrollView} from 'react-native';
import {RootStackParamList, STACK_LIST} from '../../modules/navigation/types';
import {getStyle} from './styles';

type RaceDetailProps = NativeStackScreenProps<
  RootStackParamList,
  STACK_LIST.RACE_DETAIL
>;

export const RaceDetail: FC<RaceDetailProps> = ({route: {params}}) => {
  const styles = useMemo(() => getStyle(), []);
  const {raceName, date, Circuit, url, round, season} = params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{`Название: ${raceName}`}</Text>
      <Text
        style={styles.text}>{`Название схемы: ${Circuit.circuitName}`}</Text>
      <Text style={styles.text}>{`Страна: ${Circuit.Location.country}`}</Text>
      <Text style={styles.text}>{`Сезон: ${season}`}</Text>
      <Text style={styles.text}>{`Кругов: ${round}`}</Text>
      <Text style={styles.text}>{`Дата: ${date}`}</Text>
      <Text
        style={[styles.text, styles.link]}
        onPress={() => Linking.openURL(url)}>
        {'Подробнее...'}
      </Text>
    </ScrollView>
  );
};
