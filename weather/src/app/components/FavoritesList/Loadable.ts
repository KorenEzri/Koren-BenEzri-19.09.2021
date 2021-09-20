/**
*
* Asynchronously loads the component for FavoritesList
*
*/

import { lazyLoad } from 'utils/loadable';

export const FavoritesList = lazyLoad(() => import('./index'), module => module.FavoritesList);