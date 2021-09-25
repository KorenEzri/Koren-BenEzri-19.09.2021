/**
*
* Asynchronously loads the component for WeatherBasics
*
*/

import { lazyLoad } from 'utils/loadable';

export const WeatherBasics = lazyLoad(() => import('./index'), module => module.WeatherBasics);