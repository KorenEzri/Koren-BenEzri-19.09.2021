/**
*
* Asynchronously loads the component for AddToFavorites
*
*/

import { lazyLoad } from 'utils/loadable';

export const AddToFavorites = lazyLoad(() => import('./index'), module => module.AddToFavorites);