import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../modules/hooks/useAppSelector';
import {useAppDispatch} from '../../modules/hooks/useAppDispatch';
import {getStyle} from './styles';
import {RacesList} from '../../components/RacesList';
import {fetchRacesList} from '../../modules/store/actionCreators/races';
import {Loader} from '../../components/Loader';

export const Races = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const {races, isLoading, error, total} = useAppSelector(state => state.races);

  const getRaces = (limit: number = 30, offset: number = 0) => {
    dispatch(fetchRacesList({limit, offset}));
  };

  useEffect(() => {
    getRaces();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <RacesList
        {...{races, isLoading, error, total}}
        onChangePage={getRaces}
      />
    </View>
  );
};
