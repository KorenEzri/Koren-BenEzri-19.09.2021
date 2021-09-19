/**
*
* Asynchronously loads the component for WeatherDetails
*
*/

import { lazyLoad } from 'utils/loadable';

export const WeatherDetails = lazyLoad(() => import('./index'), module => module.WeatherDetails);