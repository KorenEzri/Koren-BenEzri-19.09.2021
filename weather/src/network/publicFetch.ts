import { baseFetchURL } from 'utils';
import axios from 'axios';

export const network = axios.create({
  baseURL: baseFetchURL,
});
