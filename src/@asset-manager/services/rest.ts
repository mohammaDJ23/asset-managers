import axios, { AxiosRequestConfig } from 'axios';

export class Rest {
  public async req(arg: AxiosRequestConfig) {
    const res = await axios(arg);

    if (res.status >= 400) {
      throw new Error(res.statusText);
    }

    return res.data;
  }
}
