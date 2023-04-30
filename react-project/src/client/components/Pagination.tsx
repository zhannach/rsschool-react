import React from 'react';
import { setStartIndex } from '../redux/slices/searchSlice';
import { MAKS_RESULTS } from './CardList';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import styles from '../assets/styles/Home.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const handlePageClick = (e: { selected: number }) => {
    dispatch(setStartIndex(e.selected * MAKS_RESULTS));
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={9}
        pageCount={4}
        previousLabel="<< "
        renderOnZeroPageCount={null}
        activeClassName={styles.active}
        className={styles.paginate}
      />
    </>
  );
};

export default Pagination;
