import React, {FC, useMemo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getStyle} from './styles';

type SnackbarProps = {
  isShow?: boolean;
  message: string;
};

export const Snackbar: FC<SnackbarProps> = ({isShow = false, message}) => {
  const styles = useMemo(() => getStyle(), []);
  const [show, setShow] = useState(() => isShow);

  const handleHide = () => {
    setShow(false);
  };

  if (!show) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleHide}>
        <Text style={styles.btn_text}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};
