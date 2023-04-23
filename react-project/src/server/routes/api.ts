('use strict');
import { Request, Response } from 'express';
import { booksApi } from '../../client/redux/booksApi';
import { store } from '../../client/redux/store';

/**
 * List of API examples.
 * @route GET /api
 */
export const GetApi = async (req: Request, res: Response) => {
  // await Promise.all(store.dispatch(booksApi.util.getRunningQueriesThunk()));
  return res.status(200).end();
};
