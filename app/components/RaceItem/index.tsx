import React, {FC, useMemo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {getStyle} from './styles';
import {IRace} from '../../modules/types/races';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, STACK_LIST} from '../../modules/navigation/types';

type RaceItemProps = {
  item: IRace;
};

export const RaceItem: FC<RaceItemProps> = ({item}) => {
  const styles = useMemo(() => getStyle(), []);
  const {navigate} = useNavigation<NavigationProps>();

  const handlePress = () => {
    navigate(STACK_LIST.RACE_DETAIL, item);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{`${item.raceName} `}</Text>
      <Image
        style={styles.arrow}
        source={require('../../assets/icons/arrow.png')}
      />
    </TouchableOpacity>
  );
};
