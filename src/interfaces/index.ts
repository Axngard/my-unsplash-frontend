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

export interface State {
   photos: Photo[]
   auth: {
      status: string
      error: null | AxiosError
      data: {
         loggedIn: boolean
      }
   }
}
export interface Action {
   type: string | number
   payload?: any
}

export interface Token {
   iat: number
   userId: string
   username: string
   exp: number
}
