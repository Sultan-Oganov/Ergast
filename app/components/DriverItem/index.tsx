import React, {FC, useMemo} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getStyle} from './styles';
import {IDriver} from '../../modules/types/drivers';
import {NavigationProps, STACK_LIST} from '../../modules/navigation/types';

type DriverItemProps = {
  item: IDriver;
};

export const DriverItem: FC<DriverItemProps> = ({item}) => {
  const styles = useMemo(() => getStyle(), []);
  const {navigate} = useNavigation<NavigationProps>();

  const handlePress = () => {
    navigate(STACK_LIST.DRIVER_DETAIL, item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{`${item.givenName} ${item.familyName}`}</Text>
      <Image
        style={styles.arrow}
        source={require('../../assets/icons/arrow.png')}
      />
    </TouchableOpacity>
  );
};
