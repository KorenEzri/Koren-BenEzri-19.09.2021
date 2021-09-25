/**
*
* Asynchronously loads the component for SearchResult
*
*/

import { lazyLoad } from 'utils/loadable';

export const SearchResult = lazyLoad(() => import('./index'), module => module.SearchResult);