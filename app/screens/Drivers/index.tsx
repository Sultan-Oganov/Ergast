import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../modules/hooks/useAppSelector';
import {fetchDriversList} from '../../modules/store/actionCreators/drivers';
import {useAppDispatch} from '../../modules/hooks/useAppDispatch';
import {getStyle} from './styles';
import {DriversList} from '../../components/DriversList';
import {Loader} from '../../components/Loader';

export const Drivers = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const {drivers, isLoading, error, total} = useAppSelector(
    state => state.drivers,
  );

  const getDrivers = (limit: number = 30, offset: number = 0) => {
    dispatch(fetchDriversList({limit, offset}));
  };

  useEffect(() => {
    getDrivers();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <DriversList
        {...{drivers, isLoading, error, total}}
        onChangePage={getDrivers}
      />
    </View>
  );
};
