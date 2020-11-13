import { AxiosError } from 'axios'

export type labels =
   | 'Finance'
   | 'Health Care'
   | 'Consumer Services'
   | 'n/a'
   | 'Capital Goods'
   | 'Technology'
   | 'Consumer Durables'
   | 'Public Utilities'
   | 'Miscellaneous'
   | 'Energy'
   | 'Basic Industries'
   | 'Consumer Non-Durables'
export interface Photo {
   _id: string
   url: string
   labels: Array<labels>
   user: string
   likes: number
   views: number
   createdAt: string
}

type status = 'idle' | 'success' | 'failed' | 'loading'
export interface State {
   photos: Photo[]
   auth: {
      status: status
      error: null | AxiosError
      data: {
         loggedIn: boolean
      }
   }
   register: {
      status: status
      error: null | AxiosError
      data: null
   }
   uploadImage: {
      status: status
      error: null | AxiosError
      data: {
         image: string
      }
   }
}

export interface Token {
   iat: number
   userId: string
   username: string
   exp: number
}
