import { AxiosRequestConfig } from 'axios';
import { Forms, GlobalObj } from '../types';

export const apis: GlobalObj<(data: GlobalObj<any>) => AxiosRequestConfig> = {
  [Forms.PERSONAL_DETIALS](data) {
    return {};
  },

  [Forms.ADDRESS_DETAILS](data) {
    return {};
  },

  [`${Forms.PERSONAL_DETIALS}__${Forms.ADDRESS_DETAILS}`](data) {
    return {};
  },
};
