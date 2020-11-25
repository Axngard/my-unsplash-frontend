import { useState, useEffect } from 'react'
import { verify } from 'jsonwebtoken'
import config from '@src/config'

/* Constants */
import { localStorageItems as items } from '@src/constants'

/* Types */
interface useAuthReturn {
   token: string | null
   isValid: boolean | Error
}

const useAuth = (): useAuthReturn => {
   /* States */
   const [token, setToken] = useState(() => {
      const token = localStorage.getItem(items.TOKEN)
      return token || null
   })
   const [isValid, setIsValid] = useState<boolean>(false)

   /* Methods */
   const handleChangeStorage = (e: WindowEventMap['storage']) => {
      if (e.key === items.TOKEN) {
         setToken(e.oldValue)
         window.location.reload()
      }
   }

   const verifyToken = () => {
      if (token) {
         try {
            setIsValid(!!verify(token, config.JWT_SECRET || ''))
         } catch (error) {
            localStorage.removeItem(items.TOKEN)
         }
      }
   }

   useEffect(() => {
      window.addEventListener('storage', handleChangeStorage)
      verifyToken()

      return () => {
         window.removeEventListener('storage', handleChangeStorage)
      }
   }, [])

   return { isValid, token }
}

export default useAuth
