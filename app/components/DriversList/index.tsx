import React, {FC, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {IDriver} from '../../modules/types/drivers';
import {getStyle} from './styles';
import {DriverItem} from '../DriverItem';
import {Snackbar} from '../Snackbar';
import {Pagination} from '../Pagination';

type DriversListProps = {
  drivers: IDriver[];
  isLoading: boolean;
  error: string | null;
  total: number;
  onChangePage?: (limit: number, offset: number) => void;
};

export const DriversList: FC<DriversListProps> = ({
  drivers,
  isLoading,
  error,
  total,
  onChangePage,
}) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <View style={styles.container}>
      <FlatList<IDriver>
        keyExtractor={item => item.driverId}
        refreshing={isLoading}
        data={error ? [] : drivers}
        ListFooterComponent={error ? <Snackbar isShow message={error} /> : null}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item}) => <DriverItem {...{item}} />}
        style={styles.list}
      />
      <Pagination {...{total, onChangePage}} />
    </View>
  );
};
