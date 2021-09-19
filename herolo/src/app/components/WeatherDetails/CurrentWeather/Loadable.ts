/**
*
* Asynchronously loads the component for CurrentWeather
*
*/

import { lazyLoad } from 'utils/loadable';

export const CurrentWeather = lazyLoad(() => import('./index'), module => module.CurrentWeather);