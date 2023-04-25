import { Store } from "client/redux/store";
import { booksApi } from "../../client/redux/booksApi";

const apiRequest = async (store: Store): Promise<any[]> => {
  store.dispatch(booksApi.endpoints.getCards.initiate('react'));

  return await Promise.all(store.dispatch(booksApi.util.getRunningQueriesThunk()));
};

export { apiRequest };
