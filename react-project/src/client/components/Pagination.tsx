import React from 'react';
import { setStartIndex } from '../redux/slices/searchSlice';
import { MAX_RESULTS } from './CardList';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/styles/Home.module.scss';
import { RootState } from 'client/redux/store';
import useDebounce from '../helpers/debounce';

const Pagination = () => {
  let totalCards = useSelector((state: RootState) => state.search.totalCards);
  totalCards = useDebounce(totalCards, 100);
  const pages = Math.ceil(totalCards / MAX_RESULTS);
  const dispatch = useDispatch();
  const handlePageClick = (e: { selected: number }) => {
    dispatch(setStartIndex(e.selected * MAX_RESULTS));
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={9}
        pageCount={pages > 10 ? 10 : pages}
        previousLabel="<< "
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
        className={styles.paginate}
      />
    </>
  );
};

export default Pagination;
