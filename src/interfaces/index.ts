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
export interface Image {
   _id: string
   url: string
   labels: string[]
   likes: number
   views: number
   repositoryKey: string
   createdAt: string
   username: string
}

type status = 'idle' | 'success' | 'failed' | 'loading'
export interface State {
   auth: {
      status: status
      error: null | AxiosError
      data: {
         loggedIn: boolean
         accessToken: null | string
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
   getImages: {
      status: status
      error: null | AxiosError
      data: {
         images: Image[]
         imagesFiltered: Image[]
      }
   }
}

export interface Token {
   iat: number
   userId: string
   username: string
   exp: number
}
