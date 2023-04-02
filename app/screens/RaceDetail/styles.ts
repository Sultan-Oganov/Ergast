import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '95%',
      alignSelf: 'center',
      borderRadius: 15,
      paddingHorizontal: 12,
      paddingVertical: 12,
      backgroundColor: '#11073d',
    },
    text: {
      fontSize: 18,
      padding: 12,
      color: '#fff',
      borderRadius: 5,
      borderColor: '#fff',
      borderWidth: 1,
      marginBottom: 12,
    },
    link: {
      color: '#4eb7fc',
    },
  });
  return styles;
};
