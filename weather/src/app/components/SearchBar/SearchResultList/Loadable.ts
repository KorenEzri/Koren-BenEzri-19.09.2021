/**
*
* Asynchronously loads the component for SearchResultList
*
*/

import { lazyLoad } from 'utils/loadable';

export const SearchResultList = lazyLoad(() => import('./index'), module => module.SearchResultList);