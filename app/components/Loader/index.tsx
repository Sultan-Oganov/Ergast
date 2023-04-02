import {View, ActivityIndicator} from 'react-native';
import React, {useMemo} from 'react';
import {getStyle} from './styles';

export const Loader = () => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
