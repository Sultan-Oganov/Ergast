import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: '90%',
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: '#fff',
      borderBottomWidth: 1,
    },
    text: {
      fontSize: 18,
      color: '#fff',
    },
    arrow: {
      width: 20,
      height: 20,
    },
  });
  return styles;
};
