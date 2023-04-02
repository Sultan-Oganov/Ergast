import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 25,
      backgroundColor: '#11073d',
    },
    btn: {
      paddingVertical: 5,
      paddingHorizontal: 5,
    },
    page: {
      borderRadius: 50,
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    page_text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#11073d',
    },
    arrow: {
      width: 35,
      height: 35,
    },
    disabled: {
      opacity: 0.5,
    },
  });
  return styles;
};
