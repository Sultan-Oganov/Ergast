import React, {FC, useMemo, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {getStyle} from './styles';
import {useAppSelector} from '../../modules/hooks/useAppSelector';
import {useAppDispatch} from '../../modules/hooks/useAppDispatch';
import {
  getNumPages,
  nextPage,
  prevPage,
} from '../../modules/store/slices/paginationSlice';

type PaginationProps = {
  total: number;
  onChangePage?: (limit: number, offset: number) => void;
};

export const Pagination: FC<PaginationProps> = ({total, onChangePage}) => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const {currentPage, pages, itemsPerPage} = useAppSelector(
    state => state.pagination,
  );

  const prevDisabled = useMemo(() => currentPage === 1, [currentPage]);
  const nextDisabled = useMemo(
    () => currentPage === pages,
    [currentPage, pages],
  );

  const getPaginationParams = (page: number) => {
    const limit = itemsPerPage;
    const offset = page * limit - limit;

    onChangePage && onChangePage(limit, offset);
  };

  const handlePrev = () => {
    dispatch(prevPage());
    getPaginationParams(currentPage - 1);
  };

  const handleNext = () => {
    dispatch(nextPage());
    getPaginationParams(currentPage + 1);
  };

  useEffect(() => {
    dispatch(getNumPages(total));
  }, [dispatch, total]);

  if (!pages) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={prevDisabled}
        style={[styles.btn, prevDisabled && styles.disabled]}
        onPress={handlePrev}>
        <Image
          style={[
            styles.arrow,
            {
              transform: [{rotate: '180deg'}],
            },
          ]}
          source={require('../../assets/icons/arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.page}>
        <Text style={styles.page_text}>{currentPage}</Text>
      </View>
      <TouchableOpacity
        disabled={nextDisabled}
        style={[styles.btn, nextDisabled && styles.disabled]}
        onPress={handleNext}>
        <Image
          style={styles.arrow}
          source={require('../../assets/icons/arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
