import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const getData = (api: string, config?: AxiosRequestConfig): Promise<any> => {
   return axios
      .get(api, { ...config })
      .then(({ data }) => data)
      .catch((err: AxiosError) => err)
}

export default getData
