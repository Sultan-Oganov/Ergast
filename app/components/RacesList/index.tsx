import React, {FC, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {getStyle} from './styles';
import {RaceItem} from '../RaceItem';
import {Snackbar} from '../Snackbar';
import {IRace} from '../../modules/types/races';
import {Pagination} from '../Pagination';

type RacesListProps = {
  races: IRace[];
  isLoading: boolean;
  error: string | null;
  total: number;
  onChangePage?: (limit: number, offset: number) => void;
};

export const RacesList: FC<RacesListProps> = ({
  races,
  isLoading,
  error,
  total,
  onChangePage,
}) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <FlatList<IRace>
        keyExtractor={(item, idx) => item.Circuit.circuitId + idx}
        refreshing={isLoading}
        data={error ? [] : races}
        ListFooterComponent={error ? <Snackbar isShow message={error} /> : null}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => <RaceItem {...{item}} />}
        style={styles.list}
      />
      <Pagination {...{total, onChangePage}} />
    </View>
  );
};
