/**
*
* Asynchronously loads the component for FavoriteListItem
*
*/

import { lazyLoad } from 'utils/loadable';

export const FavoriteListItem = lazyLoad(() => import('./index'), module => module.FavoriteListItem);