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
}
export interface Action {
   type: string
   payload?: any
}

export interface Token {
   iat: number
   userId: string
   username: string
   exp: number
}
