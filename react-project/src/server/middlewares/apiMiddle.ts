import { Store, initStore } from 'client/redux/store';
import { BookData } from 'client/types/home';
import { booksApi } from '../../client/redux/booksApi';

const apiRequest = async (store: Store) => {
  store.dispatch(booksApi.endpoints.getCards.initiate('react'));

  return await Promise.all(store.dispatch(booksApi.util.getRunningQueriesThunk()));
};

export { apiRequest };
