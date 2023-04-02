import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: '95%',
      alignSelf: 'center',
      padding: 16,
      borderRadius: 10,
      backgroundColor: '#A2201D',
    },
    message: {
      color: '#fff',
    },
    btn: {
      position: 'absolute',
      top: 5,
      right: 5,
    },
    btn_text: {
      color: '#fff',
    },
  });
  return styles;
};
