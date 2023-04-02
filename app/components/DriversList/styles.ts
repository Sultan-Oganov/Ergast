import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      flex: 1,
      backgroundColor: '#11073d',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  });
  return styles;
};
